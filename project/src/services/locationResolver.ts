import { state, tagsList } from "../constants/app";
import { createFullPageArticle } from "../pages/articlePage/articlePage";
import { createLoginPage } from "../pages/loginPage/loginPage";
import { createPostPage } from "../pages/postPage/postPage";
import { createFullPageSearch } from "../pages/searchPage/searchPage";
import { createLoginHeader } from "../render/loginHeader/loginHeader";
import { createMultiTags } from "../render/multiTags/multiTags";
import { fetchWrapper, fetchWrapperThrottle } from "./fetchWrapper";
import { searchInput } from "./getArticles";
import { checkLogged } from "./login";

/**
 * calls functions based on page URL and hash
 * @param   {string} loc        window.location for path resolving
 * @event                       called functions based on window load & hash change
 * @override                    redirects unauthorized users from createPost page
 * @override                    redirects logged users from log in page
 */
export function locationResolver(loc: Location) {
  let path = loc.pathname;

  let hash = loc.hash;

  let isLogged = checkLogged();

  if (isLogged) {
    createLoginHeader();
  }

  let locType = (hash.match(/\w+/) || "")[0];
  switch (locType) {
    case "getArticle":
      let id = (hash.match(/(?<=id=)(.*?)(?=&|$)/) || [1])[0];
      fetchWrapper(`getArticles?index=${id}`, createFullPageArticle);
      break;
    case "search":
      let tag = (hash.match(/(?<=tags=)(.*?)(?=&|$)/) || [""])[0];
      createFullPageSearch(tag);
      break;
    case "createPost":
      if (!isLogged) {
        window.location.pathname = "index.html";
        break;
      }
      fetchWrapper(`getTags`, createPostPage);
      break;
    case "login":
      if (isLogged) {
        window.location.pathname = "index.html";
        break;
      }
      createLoginPage();
      break;
    default:
      if (path === "/project/article.html") {
        createFullPageSearch("");
      } else {
        fetchWrapper(`getTags`, ({ tags }: { tags: string[] }) => {
          if (tagsList) {
            createMultiTags(tags, tagsList);
          }
        });
        fetchWrapperThrottle(
          `getArticles?page=${state.page}&tags=`,
          searchInput
        );
      }
  }
}

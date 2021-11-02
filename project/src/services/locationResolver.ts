// import { searchBar, state, tagsList } from "../constants/app";
// import { createFullPageArticle } from "../pages/ArticlePage/articlePage";
// import { createLoginPage } from "../pages/loginPage/loginPage";
// import { createPostPage } from "../pages/PostPage/postPage";
// import { createFullPageSearch } from "../pages/SearchPage/searchPage";
// import { createLoginHeader } from "../components/Header/loginHeader/loginHeader";
// import { createMultiTags } from "../components/multiTags/multiTags";
// import { fetchWrapper, fetchWrapperThrottle } from "./fetchWrapper";
// import { getArticles, searchInput } from "./getArticles";
// import { checkLogged } from "./login";

// /**
//  * calls functions based on page URL and hash
//  * @param   {string} loc        window.location for path resolving
//  * @event                       called functions based on window load & hash change
//  * @override                    redirects unauthorized users from createPost page
//  * @override                    redirects logged users from log in page
//  */
// export function locationResolver(loc: Location) {
//   let origin = loc.origin;

//   let path = loc.href;
//   console.log(path);

//   let hash = loc.hash;

//   let isLogged = checkLogged();

//   if (isLogged && !document.querySelector(".head__login")) {
//     createLoginHeader();
//   }

//   let locType = (hash.match(/\w+/) || "")[0];
//   switch (locType) {
//     case "getArticle":
//       let id = (hash.match(/(?<=id=)(.*?)(?=&|$)/) || [1])[0];
//       fetchWrapper(`getArticles?index=${id}`, createFullPageArticle);
//       break;
//     case "search":
//       let tag = (hash.match(/(?<=tags=)(.*?)(?=&|$)/) || [""])[0];
//       createFullPageSearch(tag);
//       break;
//     case "createPost":
//       if (!isLogged) {
//         window.location.href = "index.html";
//         break;
//       }
//       fetchWrapper(`getTags`, createPostPage);
//       break;
//     case "login":
//       if (isLogged) {
//         window.location.href = "index.html";
//         break;
//       }
//       createLoginPage();
//       break;
//     default:
//       if (path === `${origin}/article.html`) {
//         createFullPageSearch("");
//       } else {
//         searchBar?.addEventListener("input", () => getArticles());

//         fetchWrapper(`getTags`, ({ tags }: { tags: string[] }) => {
//           if (tagsList) {
//             createMultiTags(tags, tagsList);
//           }
//         });
//         fetchWrapperThrottle(
//           `getArticles?page=${state.page}&tags=`,
//           searchInput
//         );
//       }
//   }
// }

// import { fetchWrapperthrottle } from '../'
// import { loadArticles } from '../'
import { main } from "../../constants/app";
import { ArticlePayload } from "interfaces/article";
import { fetchWrapperThrottle } from "../../services/fetchWrapper";
import { loadArticles } from "../../services/loadArticles";

import "./searchPage.scss";
import { Input } from "interfaces/input";

function searchSingleTag({
  articleList,
  tag,
  searchValue,
}: {
  articleList: HTMLElement;
  tag: string;
  searchValue: string;
}) {
  function inputSearch(payload: ArticlePayload) {
    if (articleList) {
      articleList.innerHTML = "";
    }
    loadArticles(payload, articleList, true);
  }

  fetchWrapperThrottle(
    `getArticles?tags=${tag}&title=${searchValue.trim() || ""}`,
    inputSearch
  );
}

export function createFullPageSearch(hashTag: string) {
  if (!main) return;

  // let hashTag = (window.location.hash.match(/(?<=tags=)(.*?)(?=&|$)/) || '')[0]

  let tag = hashTag.replace(/_/g, " ");

  let template = `
    <div class="main__articles__wrapper wrapper main__search__wrapper">
      <section class="main__articles">
        <h3 class="main__articles__head">Searching by tag : ${tag || "All"}</h3>
        <div class="main__articles__search">
          <input type="search" class="search__input" placeholder="Search for article">
        </div>
        <ul class="articles__list">
        </ul>
      </section>
    </div>`;

  main.innerHTML = template;

  const searchBar: Input | null = main.querySelector(".search__input");

  const articleList: HTMLElement | null = main.querySelector(".articles__list");

  if (searchBar) {
    searchBar.addEventListener("input", () => {
      if (articleList) {
        searchSingleTag({
          articleList,
          tag,
          searchValue: searchBar?.value || "",
        });
      }
    });
  }

  if (articleList) {
    searchSingleTag({ articleList, tag, searchValue: searchBar?.value || "" });
  }
}

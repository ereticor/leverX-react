// import { fetchWrapperthrottle } from '../'
// import { loadArticles } from '../'
import { searchBar } from "../../constants/app";
import { ArticlePayload } from "interfaces/article";
import { fetchWrapperThrottle } from "../../services/fetchWrapper";
import { loadArticles } from "../../services/loadArticles";

import "./searchPage.scss";

function searchSingleTag({
  pageList,
  tag,
  searchValue,
}: {
  pageList: HTMLElement;
  tag: string;
  searchValue: string;
}) {
  function inputSearch(payload: ArticlePayload) {
    if (pageList) {
      pageList.innerHTML = "";
    }
    loadArticles(payload, pageList, true);
  }

  if (searchBar) {
    fetchWrapperThrottle(
      `getArticles?tags=${tag}&title=${searchValue.trim() || ""}`,
      inputSearch
    );
  }
}

export function createFullPageSearch(hashTag: string) {
  const main = document.querySelector(".main");

  if (!main) return;

  // let hashTag = (window.location.hash.match(/(?<=tags=)(.*?)(?=&|$)/) || '')[0]

  let tag = hashTag.replace(/\s/g, " ");

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

  let searchBar: HTMLInputElement | null = main.querySelector(".search__input");

  let pageList: HTMLElement | null = main.querySelector(".articles__list");

  if (searchBar) {
    searchBar.addEventListener("input", () => {
      if (pageList) {
        searchSingleTag({ pageList, tag, searchValue: searchBar?.value || "" });
      }
    });
  }

  if (pageList) {
    searchSingleTag({ pageList, tag, searchValue: searchBar?.value || "" });
  }
}

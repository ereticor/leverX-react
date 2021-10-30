import { articleList, searchBar, state } from "../constants/app";
import { Article } from "interfaces/article";
import { fetchWrapperThrottle } from "./fetchWrapper";
import { loadArticles } from "./loadArticles";

export function searchInput(articlesData: {
  articles: Article[];
  meta: { maxPage: number };
}) {
  if (articleList) {
    loadArticles(articlesData, articleList);
  }
}

export function getArticles(isUpdateList = true) {
  if (isUpdateList) {
    articleList!.innerHTML = "";
    state.page = 0;
  }

  const checkBoxes: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".checkbar__label_checked"
  );
  let tags = [...checkBoxes]
    .map((el) => el.innerText.replace(/\s/g, "_"))
    .join("+"); //!delete this mess

  fetchWrapperThrottle(
    `getArticles?tags=${tags}&title=${searchBar!.value?.trim() || ""}&page=${
      state.page
    }`,
    searchInput
  );
}

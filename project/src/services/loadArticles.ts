import { state } from "../constants/app";
import { Article } from "../interfaces/article";
import { createArticle } from "../render/article/article";
import { createLoadBtn } from "../render/loadBtn/loadBtn";
import { getArticles } from "./getArticles";

export function loadArticles(
  { articles, meta }: { articles: Article[]; meta: { maxPage: number } },
  pageList: HTMLElement,
  fullLoad = false
) {
  const oldBtn = pageList.parentNode!.querySelector(".articles__load");
  if (oldBtn) oldBtn.remove();

  articles.forEach((article) => {
    pageList.append(createArticle(article));
  });

  if (fullLoad) {
    return;
  }

  const newBtn = createLoadBtn();

  function loadOnPage() {
    state.page += 1;
    getArticles(false);
  }

  if (state.page + 1 >= meta.maxPage) {
    newBtn.remove();
  } else if (!pageList.parentNode!.contains(newBtn)) {
    pageList.parentNode!.append(newBtn);
    newBtn.addEventListener("click", loadOnPage);
  }
}

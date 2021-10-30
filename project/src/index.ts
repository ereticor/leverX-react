import { checkBar, searchBar, sign, state, tagsList } from "./constants/app";
import { getArticles } from "./services/getArticles";
import { locationResolver } from "./services/locationResolver";
import { slide } from "./slider/slider";

import "./styles/index.scss";

slide();

searchBar?.addEventListener("input", () => getArticles());

checkBar?.addEventListener("click", () => getArticles());

["load", "hashchange"].forEach((el) => {
  window.addEventListener(el, () => {
    const location = window.location;

    if (location) {
      locationResolver(location);
    }
  });
});

sign?.addEventListener("click", () => {
  window.location.pathname = "index.html#login";
});

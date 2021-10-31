import { createMultiTags } from "../multiTags/multiTags";
import { Article } from "interfaces/article";

/**
 * return article node with it's data
 * @param   {array} articles  Object from which the node is created
 * @param   {string} type       type of article container for usage in list or section for full-page article
 * @param   {string} fullPage   adds additional information for article if rendered in full-page mode
 * @event                       link to full-page article if rendered in list
 * @event                       link on tag click to search page with predefined tag
 * @return  {nodeElement}       created article node
 */
export function createArticle(
  articles: Article,
  type = "li",
  fullPage = false
) {
  let article = document.createElement(type);

  article.setAttribute("data-keywords", articles.keywords.join(", "));
  article.classList.add("articles__item");

  let figure = document.createElement("figure");
  figure.classList.add("item__figure");

  let img = document.createElement("img");
  img.src = articles.picture;

  let cap = document.createElement("figcaption");
  cap.classList.add("item__cap");

  let capHead = document.createElement("h6");
  capHead.classList.add("cap__head");
  capHead.innerHTML = articles.title;

  let capText: HTMLElement | null = document.createElement(
    fullPage ? "div" : "p"
  );

  let link;

  if (!fullPage) {
    capText.classList.add("cap__text");
    capText.title = articles.content[0].text[0];
    capText.innerText = articles.content[0].text[0];

    link = document.createElement("a");
    link.href = `article.html#getArticle?id=${articles.index}`;

    link.append(figure);

    article.append(link);
  }

  cap.append(capHead, capText);

  figure.append(img, cap);

  if (fullPage) {
    capText.classList.add("cap__content");
    createContent(articles, capText);

    let capCred = document.createElement("div");
    capCred.classList.add("cap__credits");

    let author = document.createElement("p");
    author.classList.add("credits__author");
    author.innerText = articles.author;

    let date = document.createElement("time");
    date.classList.add("credits__date");
    date.innerText = dateToHuman(articles.date);

    capCred.append(author, date);

    cap.append(capCred);

    let tags = document.createElement("div");
    tags.classList.add("item__tags");

    createMultiTags(articles.keywords, tags);

    for (let i = 0; i < tags.children.length; i++) {
      tags.children[i].addEventListener("click", () => {
        window.location.href = `article.html#search?tags=${articles.keywords[
          i
        ].replace(/\s/g, "_")}`;
      });
    }

    figure.append(tags);

    article.append(figure);
  }

  return article;

  function createContent(articles: Article, parent: Element) {
    let contentArr = articles.content;
    for (let i = 0; i < contentArr.length; i++) {
      let head = document.createElement("h6");
      head.innerText = contentArr[i].head;
      head.classList.add("content__head");
      parent.append(head);

      contentArr[i].text.forEach((el) => {
        let text = document.createElement("p");
        text.classList.add("content__text");
        text.innerText = el;

        parent.append(text);
      });
    }
  }

  function dateToHuman(stamp: number) {
    const formatter = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formatter.format(stamp);
  }
}

import "./multiTags.scss";

function createTag(text: string) {
  let tag = `<label class="checkbar__label">
               <input class="checkbar__input" type="checkbox">${text}
             </label> `;

  return tag;
}

export function createMultiTags(
  tags: string[],
  parent: HTMLElement,
  tagServe = false
) {
  let tagsHTML = [...tags].reduce((acc, tag) => acc + createTag(tag), "");

  parent.innerHTML = tagsHTML;

  let checkboxes = parent.querySelectorAll(".checkbar__input");

  checkboxes.forEach((el) => {
    el.addEventListener("click", () => {
      el.parentElement!.classList.toggle("checkbar__label_checked");
    });
  });
}

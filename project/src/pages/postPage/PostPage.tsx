import PostForm from "../../components/PostForm";
import React from "react";

import "./postPage.scss";

export default class PostPage extends React.Component {
  render() {
    return (
      <>
        <main className="main">
          <div className="main__create__wrapper wrapper">
            <PostForm />
          </div>
        </main>
      </>
    );
  }
}
// preview(input: Input) {
//   let reader = new FileReader();

//   if (input.files) {
//     reader.readAsDataURL(input.files[0]);
//   }

//   reader.addEventListener("load", () => {
//     filePreview!.src = reader.result as string;
//     filePreview!.classList.add("show");

//     filePreview!.parentElement!.classList.add("show");
//   });
// }

// createStory() {
//   let subStory = document.createElement("div");
//   subStory.classList.add("create__sub__story");

//   let subTemplate = `
//     <h6 class="create__head">Enter the subtitle of your article</h6>
//     <input type="text" class="create__sub create__text" placeholder="Enter Subtitle" required>
//     <h6 class="create__head">Tell your story...</h6>
//     <textarea class="create__area" rows="25" required></textarea>
//     <button class="create__btn btn">Add new block</button>
//   `;

//   subStory.innerHTML = subTemplate;

//   subWrapper!.append(subStory);

//   let addBtn: HTMLButtonElement | null =
//     subStory.querySelector(".create__btn");

//   addBtn!.addEventListener("click", changeStatus);

//   function changeStatus() {
//     if (!subStory.nextElementSibling) {
//       createStory();
//       addBtn!.classList.add("remove__story");
//       addBtn!.innerText = "Remove next block";
//     } else {
//       if (subWrapper!.lastElementChild === subStory.nextElementSibling) {
//         addBtn!.classList.remove("remove__story");
//         addBtn!.innerText = "Add new block";
//       }
//       subStory.nextElementSibling?.remove();
//     }
//   }
// }

// form!.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (form!.querySelectorAll(".checkbar__label_checked").length > 1) {
//     if (form) {
//       let newPost = createPOST(form);

//       let options = {
//         method: Method.POST,
//         headers: { "Content-Type": "application/json" },
//         body: newPost,
//       };

//       fetchWrapper(`createPost`, formStatus, options);

//       function formStatus(resp: { redirectTo: string }, err: number) {
//         if (err) {
//           alert("something went wrong");
//           window.location.reload();
//         } else {
//           alert("success");
//           window.location.hash = resp.redirectTo;
//         }
//       }
//     }
//   }
// });

// createPOST(form: HTMLFormElement) {
//   const title: Input | null = form.querySelector(".create__title");

//   const obj: Article = {
//     title: title!.value.trim(),

//     content: [],

//     picture: filePreview!.src,

//     author: JSON.parse(localStorage.getItem("logged") || "").name,

//     date: Date.now(),

//     keywords: [],
//   };

//   let subTitles: NodeListOf<Input> = form.querySelectorAll(".create__sub");
//   let subTexts: NodeListOf<Input> = form.querySelectorAll(".create__area");

//   for (let i = 0; i < subTitles.length; i++) {
//     obj.content.push({
//       head: subTitles[i].value.trim() || "",
//       text: [subTexts[i].value.trim()],
//     });
//   }

//   let tags: NodeListOf<HTMLElement> = form.querySelectorAll(
//     ".checkbar__label_checked"
//   );

//   tags.forEach((tag) => obj.keywords.push(tag.innerText.replace(/\s/g, "_")));

//   return JSON.stringify(obj);
// }

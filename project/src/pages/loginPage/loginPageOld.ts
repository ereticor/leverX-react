// import "./loginPage.scss";
// import { main } from "../../constants/app";
// import { Input } from "interfaces/input";
// import { logIn } from "../../services/login";

// /**
//  * renders log in page with form
//  * @param                       no parameters required
//  * @event  inputs checker for email & password
//  * @event  checkbox for showing/hiding password
//  * @override                    replaces main content in index.html with it's own
//  */
// export function createLoginPage() {
//   let headBtn = document.querySelector(".head__sign");

//   headBtn?.remove();

//   let template = `
//   <div class="main__login__wrapper wrapper">
//     <section class="main__login">
//       <h3 class="main__login__head">Welcome to course</h3>
//       <form class="main__login__form">
//         <div class="form__input__wrapper">
//           <input class="form__mail form__input" type="email" placeholder="E-mail" required>
//         </div>
//         <div class="form__input__wrapper">
//           <input class="form__password form__input" type="password" placeholder="password" required>
//         </div>
//         <label class="form__show">
//           <input type="checkbox">
//           show password
//         </label>
//         <button class="form__submit" type="submit">login</button>
//       </form>
//     </section>
//   </div>`;

//   main!.innerHTML = template;

//   let form = main!.querySelector(".main__login__form");

//   let mailInput: Input | null = form!.querySelector(".form__mail");
//   let passInput: Input | null = form!.querySelector(".form__password");

//   [mailInput, passInput].forEach((el) => {
//     el!.addEventListener("input", () => checkInput(el!));
//   });

//   let checkbox = form!.querySelector(".form__show input");
//   checkbox!.addEventListener("click", () => {
//     if (passInput!.type === "password") {
//       passInput!.type = "text";
//     } else {
//       passInput!.type = "password";
//     }
//   });

//   form!.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let check = (el: Input) =>
//       el.parentElement.classList.contains("form_success");

//     if (mailInput && passInput && check(mailInput) && check(passInput)) {
//       logIn(mailInput.value, passInput.value);
//     }
//   });

//   function checkInput(input: Input) {
//     const inputValue = input.value.trim();

//     if (inputValue === "") {
//       setErrorFor(input, `${input.type} cannot be blank`);
//     } else {
//       setSuccessFor(input);
//     }

//     function setErrorFor(input: Input, message: string) {
//       const formControl = input.parentElement;
//       formControl!.classList.add("form_error");
//       formControl!.classList.remove("form_success");
//       formControl!.setAttribute("data-message", message);

//       formControl!.classList.add("form_light");
//       setTimeout(() => {
//         formControl!.classList.remove("form_light");
//       }, 1000);
//     }

//     function setSuccessFor(input: Input) {
//       const formControl = input.parentElement;
//       formControl!.classList.add("form_success");
//       formControl!.classList.remove("form_error");
//     }
//   }
// }

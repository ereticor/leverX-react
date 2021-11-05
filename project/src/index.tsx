import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector(".app"));

// import { sign } from "./constants/app";
// import { locationResolver } from "./services/locationResolver";
// import { slide } from "./slider/slider";

// import "./styles/index.scss";

// if (document.querySelector(".main__intro__slider")) {
//   slide();
// }

// ["load", "hashchange"].forEach((el) => {
//   window.addEventListener(el, () => {
//     const location = window.location;

//     if (location) {
//       locationResolver(location);
//     }
//   });
// });

// sign?.addEventListener("click", () => {
//   window.location.href = "index.html#login";
// });

import { fetchWrapperThrottle } from "./fetchWrapper";
import { User } from "interfaces/user";

/**
 * checks if user already logged in
 * @return  {boolean} true if user already logged
 */
export function checkLogged() {
  return !!localStorage.getItem("logged");
}

/**
 * saves user information in localStorage
 * @param   {object} user       user's info (without password) for localStorage
 * @param   {number} error      error status if user cant be founded in database
 * @see     {logIn}             runs to login when user is saved
 */
function saveUser(user: User, error?: unknown) {
  if (error) {
    window.location.pathname = "index.html#login";
    switch (error) {
      case 401:
        setTimeout(() => alert("wrong password"), 200);
        break;
      case 404:
        setTimeout(() => alert("no such user"), 200);
        break;
    }
    return;
  }

  localStorage.setItem("logged", JSON.stringify(user));

  window.location.pathname = "index.html";
}

/**
 * sends user's info to server side for validation
 * @param   {string} mail       user's email address
 * @param   {string} pass       user's password
 * @see     {checkLogged}       no futher server requests if user already logged in
 * @override                    replaces header log in button with createPost one and user's image
 */
export function logIn(mail?: string, pass?: string) {
  if (mail && pass) {
    fetchWrapperThrottle(`sign?email=${mail}&password=${pass}`, saveUser);
  }
}

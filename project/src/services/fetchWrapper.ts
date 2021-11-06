import { throttle } from "../helpers/throttle";
import { UrlOptions } from "interfaces/urlOptions";
import { server } from "../constants/server";

export async function fetchWrapper(
  url: string,
  callback: Function,
  options: UrlOptions | null = null
) {
  try {
    const response = await fetch(`${server}/${url}`, options || {});
    if (response.status >= 400) {
      throw response.status;
    }
    const data = await response.json();
    callback(data);
  } catch (error) {
    callback(null, error);
  }
}

export const fetchWrapperThrottle = throttle(fetchWrapper, 1000);

// function log(data, error) {
//   if (error) {
//     console.error(error)
//   } else {
//     console.log(data)
//   }
// }

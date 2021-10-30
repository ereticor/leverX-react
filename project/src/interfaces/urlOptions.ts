import Obj from "./object";

export enum Method {
  POST = "POST",
  GET = "GET",
}

export interface UrlOptions {
  method: Method;
  headers: Obj;
  body: string | null;
}

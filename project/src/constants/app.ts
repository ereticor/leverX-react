import { Input } from "interfaces/input";

export const head = document.querySelector(".head");

export const main = document.querySelector(".main");

export const sign = document.querySelector(".head__sign");

export const articleSection: HTMLElement | null =
  document.querySelector(".main__articles");
export const articleList: HTMLElement | null =
  document.querySelector(".articles__list");
export const loadBtn: HTMLElement | null =
  document.querySelector(".articles__load");
export const tagsList: HTMLElement | null = document.querySelector(
  ".main__articles__checkbar"
);
export const searchBar: Input | null = document.querySelector(".search__input");
export const checkBar: HTMLElement | null = document.querySelector(
  ".main__articles__checkbar"
);

export const state = {
  page: 0,
};

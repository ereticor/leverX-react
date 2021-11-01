interface ArticleContent {
  head: string;
  text: string[];
}

export interface Article {
  _id?: string;
  index?: number;
  title: string;
  content: ArticleContent[];
  picture: string;
  author: string;
  date: number;
  keywords: string[];
}

export interface ArticlePayload {
  articles: Article[];
  meta: { maxPage: number };
}

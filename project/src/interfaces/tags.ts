import { Action } from "redux-actions";
import { RSAAAction } from "redux-api-middleware";

export interface SelectorProps {
  tags: string[];
  isLoadingTags: boolean;
}

export interface ActionProps {
  getTags: () => RSAAAction<unknown, unknown, unknown>;
}

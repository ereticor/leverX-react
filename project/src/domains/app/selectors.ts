import { ReduxStore } from "../../interfaces/store";
import { createSelector } from "reselect";

export const getApp = (state: ReduxStore) => {
  return state.app;
};

export const getTags = createSelector(getApp, (app) => app.tags);

export const isLoadingTags = createSelector(getApp, (app) => app.isLoadingTags);

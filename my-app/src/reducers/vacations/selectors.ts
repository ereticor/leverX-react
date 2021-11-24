import { createSelector } from "reselect";

import { ReduxStore } from "../../interfaces/store";

export const getApp = (state: ReduxStore) => {
  return state.app;
};

export const getDays = createSelector(getApp, (app) => app.days);

export const getVacations = createSelector(getApp, (app) => app.vacations);

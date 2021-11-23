import Vacation from "./vacation";
export interface AppState {
  days: number;
  vacations: Vacation[];
}

export interface ReduxStore {
  app: AppState;
}

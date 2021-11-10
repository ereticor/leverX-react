import { RouterState } from "connected-react-router";
import User from "./user";

export interface AppState {
  tags: string[];
  isLoadingTags: boolean;
}

export interface AuthState {
  isLoadingUser: boolean;
  user: User | null;
}

export interface ReduxStore {
  router: RouterState<unknown>;
  app: AppState;
  auth: AuthState;
}

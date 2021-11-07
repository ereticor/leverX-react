import { RouterState } from "connected-react-router";
import { AppState } from "../domains/app/reducer";
import { AuthState } from "../domains/auth/reducer";

export interface ReduxStore {
  router: RouterState<unknown>;
  app: AppState;
  auth: AuthState;
}

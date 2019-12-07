import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ApplicationState, createRootReducer } from "./store";

export default function configureStore(): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}

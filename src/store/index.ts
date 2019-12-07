import { combineReducers } from "redux";

import { timerReducer } from "./Timer/reducer";
import { TimerState } from "./Timer/types";

export interface ApplicationState {
  timer: TimerState;
}

export const createRootReducer = () =>
  combineReducers({
    timer: timerReducer
  });

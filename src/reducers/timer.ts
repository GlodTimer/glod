import {
  IS_RUNNING,
  IS_PAUSED,
  TimerActionTypes
} from "../constants/timerActions";

interface ITimerState {
  readonly isRunning: boolean;
  //readonly isPaused: boolean;
  //readonly isComplete: boolean;
  //readonly showControls: boolean;
  //readonly comparisons: number[];
  //readonly splits: object[];
}

const initialState: ITimerState = {
  isRunning: false
  //isPaused: false,
  //isComplete: false,
  //showControls: true,
  //comparisons: [],
  //splits: []
};

const timerReducer = (
  state: object = initialState,
  action: TimerActionTypes
): any => {
  switch (action.type) {
    case IS_RUNNING: {
      const { payload } = action;
      const { isRunning } = payload;

      return {
        ...state,
        isRunning
      };
    }
    default:
      return state;
  }
};

export default timerReducer;

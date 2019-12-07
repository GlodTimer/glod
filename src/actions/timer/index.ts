import {
  IS_RUNNING,
  IS_PAUSED,
  TimerActionTypes
} from "../../constants/timerActions";

export const setIsRunning = (isRunning: boolean): TimerActionTypes => ({
  type: IS_RUNNING,
  payload: {
    isRunning
  }
});

export const setIsPaused = (isPaused: boolean): TimerActionTypes => ({
  type: IS_PAUSED,
  payload: {
    isPaused
  }
});

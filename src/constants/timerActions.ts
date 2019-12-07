export const IS_RUNNING = "IS_RUNNING";
export const IS_PAUSED = "IS_PAUSED";

interface IsRunningAction {
  type: typeof IS_RUNNING;
  payload: {
    isRunning: boolean;
  };
}

interface IsPausedAction {
  type: typeof IS_PAUSED;
  payload: {
    isPaused: boolean;
  };
}

export type TimerActionTypes = IsRunningAction | IsPausedAction;

export const IS_RUNNING = "IS_RUNNING";
export const IS_PAUSED = "IS_PAUSED";

interface IsRunningAction {
  type: typeof IS_RUNNING;
  payload: boolean;
}

interface IsPausedAction {
  type: typeof IS_PAUSED;
  payload: boolean;
}

export type TimerActionTypes = IsRunningAction | IsPausedAction;

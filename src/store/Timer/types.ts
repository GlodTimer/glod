export interface TimerState {
  readonly isRunning: boolean;
  readonly isPaused: boolean;
  readonly isComplete: boolean;
  readonly showControls: boolean;
  readonly currentSplit: number;
  readonly splits: object[];
}

export enum TimerActionTypes {
  IS_RUNNING = "@@timer/IS_RUNNING",
  IS_PAUSED = "@@timer/IS_PAUSED",
  IS_COMPLETE = "@@timer/IS_COMPLETE",
  TOGGLE_SHOW_CONTROLS = "@@timer/TOGGLE_SHOW_CONTROLS",
  START_RUN = "@@timer/START_RUN",
  SET_SPLIT = "@@timer/SET_SPLIT",
  SET_CURRENT_SPLIT = "@@timer/SET_CURRENT_SPLIT",
  COMPLETE_RUN = "@@timer/COMPLETE_RUN"
}

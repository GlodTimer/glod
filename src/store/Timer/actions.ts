import { action } from "typesafe-actions";
import { TimerActionTypes } from "./types";

export const setIsRunning = (isRunning: boolean) =>
  action(TimerActionTypes.IS_RUNNING, isRunning);

export const setIsPaused = (isPaused: boolean) =>
  action(TimerActionTypes.IS_PAUSED, isPaused);

export const setIsComplete = (isComplete: boolean) =>
  action(TimerActionTypes.IS_COMPLETE, isComplete);

export const toggleShowControls = () =>
  action(TimerActionTypes.TOGGLE_SHOW_CONTROLS);

export const setSplit = (time: number, index: number) =>
  action(TimerActionTypes.SET_SPLIT, { time, index });

export const startRun = () => action(TimerActionTypes.START_RUN);

export const completeRun = (time: number) =>
  action(TimerActionTypes.COMPLETE_RUN, time);

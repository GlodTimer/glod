import { Reducer } from "redux";
import { TimerState, TimerActionTypes } from "./types";

const initialState: TimerState = {
  isRunning: false,
  isPaused: false,
  isComplete: false,
  showControls: true,
  currentSplit: 0,
  splits: [
    {
      index: 0,
      name: "Stasis",
      endedAt: {
        realtimeMS: 0
      },
      bestDuration: {
        realtimeMS: 0
      },
      personalBest: {
        realtimeMS: 0
      }
    },
    {
      index: 1,
      name: "Cryonis",
      endedAt: {
        realtimeMS: 0
      },
      bestDuration: {
        realtimeMS: 0
      },
      personalBest: {
        realtimeMS: 0
      }
    }
  ]
};

const reducer: Reducer<TimerState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case TimerActionTypes.IS_RUNNING: {
      return {
        ...state,
        isRunning: payload
      };
    }
    case TimerActionTypes.IS_PAUSED: {
      return {
        ...state,
        isPaused: payload
      };
    }
    case TimerActionTypes.IS_COMPLETE: {
      return {
        ...state,
        isComplete: payload
      };
    }
    case TimerActionTypes.TOGGLE_SHOW_CONTROLS: {
      return {
        ...state,
        showControls: !state.showControls
      };
    }
    case TimerActionTypes.SET_SPLIT: {
      const { time, index } = payload;
      const { splits } = state;

      const newSplits: Array<object> = splits.map((split, splitIndex) => {
        if (index === splitIndex) {
          return {
            ...split,
            endedAt: {
              realtimeMS: time
            }
          };
        }

        return split;
      });

      return {
        ...state,
        splits: newSplits
      };
    }

    case TimerActionTypes.START_RUN: {
      const { splits } = state;
      const newSplits = splits.map(split => ({
        ...split,
        endedAt: {
          realtimeMS: 0
        }
      }));

      return {
        ...state,
        isRunning: true,
        isPaused: false,
        isComplete: false,
        splits: newSplits
      };
    }
    default:
      return state;
  }
};

export { reducer as timerReducer };

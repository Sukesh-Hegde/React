import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below

// export the alert reducer function here

// create and export alert selector function here

const alertSlice = createSlice({
  name: "alert",
  initialState: INITIAL_STATE,
  reducers: {
    resetAlert: (state, action) => {
      state.message = null;
    },
  },
  extraReducers: {
    "timer/startTimer": (state, action) => {
      state.message = "Timer has started.";
    },
    "timer/pauseTimer": (state, action) => {
      state.message = "Timer has paused.";
    },
    "timer/resetTimer": (state, action) => {
      state.message = "Timer set to 0.";
    },
  },
});

export const alertReducer = alertSlice.reducer;

export const resetAlert = alertSlice.actions.resetAlert;

export const alertSelector = (state) => state.alertReducer;
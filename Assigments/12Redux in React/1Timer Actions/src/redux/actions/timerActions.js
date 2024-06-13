// define action constants here
export const INCREMENT_TIMER = "incrementTimer";
export const PAUSE_TIMER = "pauseTimer";
export const RESET_TIMER = "resetTimer";
export const START_TIMER = "startTimer";

// define action creators here
export const incrementTimer = (index) => ({ index, type: INCREMENT_TIMER });
export const pauseTimer = (index) => ({ index, type: PAUSE_TIMER });
export const resetTimer = (index) => ({ index, type: RESET_TIMER });
export const startTimer = (index) => ({ index, type: START_TIMER });
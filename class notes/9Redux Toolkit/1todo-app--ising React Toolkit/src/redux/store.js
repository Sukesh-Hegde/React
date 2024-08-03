// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

// export const store = redux.createStore(result);


import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";


export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
  },
});

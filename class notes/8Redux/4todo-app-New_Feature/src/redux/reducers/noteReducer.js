import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    { text: "Go to Gym at 6", createdOn: new Date().toISOString() },
    { text: "Study at 8", createdOn: new Date().toISOString() },
  ],
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date().toISOString(),
          },
        ],
      };
    case DELETE_NOTE:
        state.notes.splice(action.index,1);
      return{
       ...state,
       notes:[...state.notes]
      };
    default:
      return state;
  }
}
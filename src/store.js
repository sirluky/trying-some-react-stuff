import { createStore } from "redux";

// types
export const SHOW_ANOTHER_ROW = 'SHOW_ANOTHER_ROW';

// init state
const initialState = {
  rowsShown: 1
}

// actions

export const addRow = _ => ({ type: SHOW_ANOTHER_ROW, payload: { by: 1 } })

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ANOTHER_ROW:
      return {
        ...state,
        rowsShown: state.rowsShown + action.payload.by
      }
    default:
      return state
  }
}


export const store = createStore(reducer)

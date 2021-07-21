import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./phonebook-actions";
import defaultContacts from "../../json/contacts.json";

const initialState = defaultContacts;

const items = createReducer(initialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

/*--------------  without Redux Toolkit  ----------------------
import { combineReducers } from "redux";
import types from "./phonebook-types";
import defaultContacts from "../../json/contacts.json";

const initialState = defaultContacts;

const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
*/

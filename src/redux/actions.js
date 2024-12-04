// src/redux/actions.js
export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const SET_DATE = "SET_DATE";

export const addEvent = (date, event) => ({
  type: ADD_EVENT,
  payload: { date, event },
});

export const deleteEvent = (date, eventId) => ({
  type: DELETE_EVENT,
  payload: { date, eventId },
});

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});

// src/redux/reducers.js
import { ADD_EVENT, DELETE_EVENT, SET_DATE } from "./actions";

const initialState = {
  selectedDate: new Date(),
  events: {}, // Sự kiện được lưu trữ theo dạng { "YYYY-MM-DD": [...eventList] }
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      const { date, event } = action.payload;
      const dateString = date.toISOString().split("T")[0];
      return {
        ...state,
        events: {
          ...state.events,
          [dateString]: [...(state.events[dateString] || []), event],
        },
      };
    case DELETE_EVENT:
      const { eventId } = action.payload;
      const updatedEvents = state.events[action.payload.date].filter(
        (event) => event.id !== eventId
      );
      return {
        ...state,
        events: {
          ...state.events,
          [action.payload.date]: updatedEvents,
        },
      };
    case SET_DATE:
      return { ...state, selectedDate: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;

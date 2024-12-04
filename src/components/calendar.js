// src/components/Calendar.js
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../redux/actions";

const CalendarComponent = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.selectedDate);

  const handleDateChange = (date) => {
    dispatch(setDate(date));
  };

  return (
    <div className="calendar-container">
      <h2>Chọn ngày</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
    </div>
  );
};

export default CalendarComponent;

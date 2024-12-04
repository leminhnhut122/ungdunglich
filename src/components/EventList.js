// src/components/EventList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../redux/actions";

const EventList = () => {
  const selectedDate = useSelector((state) => state.selectedDate);
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const dateString = selectedDate.toISOString().split("T")[0];
  const eventsForToday = events[dateString] || [];

  const handleDeleteEvent = (eventId) => {
    dispatch(deleteEvent(dateString, eventId));
  };

  return (
    <div className="event-list">
      <h3>Sự kiện hôm nay</h3>
      {eventsForToday.length === 0 ? (
        <p>Không có sự kiện</p>
      ) : (
        <ul>
          {eventsForToday.map((event) => (
            <li key={event.id}>
              <span>{event.title}</span>
              <button onClick={() => handleDeleteEvent(event.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;

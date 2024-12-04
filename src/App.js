// src/App.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarComponent from "./components/calendar";
import EventList from "./components/EventList";
import { addEvent } from "./redux/actions"; // Đảm bảo bạn đã khai báo và export addEvent từ actions.js
import "./App.css"; // Import file CSS

const App = () => {
  const [eventTitle, setEventTitle] = useState(""); 
  const selectedDate = useSelector((state) => state.selectedDate); // Lấy ngày được chọn từ state Redux
  const dispatch = useDispatch(); // Dispatch action để thay đổi state Redux

  // Hàm để thêm sự kiện
  const handleAddEvent = () => {
    if (eventTitle) {
      const event = {
        id: Date.now(), // Tạo ID duy nhất cho sự kiện
        title: eventTitle, // Tiêu đề sự kiện
      };
      // Dispatch action addEvent để thêm sự kiện vào Redux
      dispatch(addEvent(selectedDate, event));
      setEventTitle(""); // Reset giá trị input sau khi thêm sự kiện
    }
  };

  return (
    <div className="app-container">
      <h1>Ứng dụng Lịch</h1>
      <CalendarComponent /> {/* Component hiển thị lịch */}
      <EventList /> {/* Component hiển thị danh sách sự kiện */}
      <div className="event-input">
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)} // Cập nhật state eventTitle khi người dùng nhập
          placeholder="Thêm sự kiện"
        />
        <button onClick={handleAddEvent}>Thêm</button>
      </div>
    </div>
  );
};

export default App;

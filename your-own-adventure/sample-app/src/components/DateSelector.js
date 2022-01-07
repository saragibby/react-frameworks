import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingRight: "2rem",
        }}
      >
        <label>Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>End Date</label>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
    </div>
  );
};

export default DateSelector;

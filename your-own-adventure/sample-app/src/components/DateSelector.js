import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <>
      <label>Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <label>End Date</label>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
    </>
  );
};

export default DateSelector;

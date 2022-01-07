import React, { useState } from "react";
import "./App.css";
import DailyStat from "./components/DailyStat";
import DateSelector from "./components/DateSelector";

const App = () => {
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() - 200);

  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(defaultDate);
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <h1>Nope, create-react-app is not what you want, and here's why</h1>
      <h2>Your Own Adventure</h2>
      <DateSelector
        startDate={startDate}
        setStartDate={(value) => {
          setLoading(true);
          setStartDate(value);
        }}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <DailyStat
        loading={loading}
        setLoading={setLoading}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default App;

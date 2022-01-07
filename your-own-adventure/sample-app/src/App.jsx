import React, { useState } from "react";
import "./App.css";
import DailyStat from "./components/DailyStat";
import DateSelector from "./components/DateSelector";
import StateSelect from "./components/StateSelect";
import { defaultStateName } from "./constants";

const App = () => {
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() - 200);

  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(defaultDate);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState(defaultStateName);

  console.log("selectedState", selectedState);

  return (
    <div className="App">
      <h1>Nope, create-react-app is not what you want, and here's why</h1>
      <h2>Your Own Adventure</h2>
      <div style={{ display: "flex" }}>
        <DateSelector
          startDate={startDate}
          setStartDate={(value) => {
            setLoading(true);
            setStartDate(value);
          }}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div style={{ flexGrow: 2, paddingLeft: "2rem" }}>
          <StateSelect
            setSelectedState={setSelectedState}
            setLoading={setLoading}
          />
        </div>
      </div>
      <DailyStat
        loading={loading}
        setLoading={setLoading}
        startDate={startDate}
        endDate={endDate}
        selectedState={selectedState}
      />
    </div>
  );
};

export default App;

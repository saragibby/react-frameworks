/**
 * Page: United States Only
 * Ability to query stats for a single state
 */

import React, { useState } from "react";
import DailyStat from "../components/DailyStat";
import DateSelector from "../components/DateSelector";
import StateSelect from "../components/StateSelect";
import { defaultStateName } from "../constants";

const UnitedStatesOnly = () => {
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() - 200);

  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(defaultDate);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState(defaultStateName);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <DateSelector
          startDate={startDate}
          setStartDate={(value) => {
            setLoading(true);
            setStartDate(value);
          }}
          endDate={endDate}
          setEndDate={(value) => {
            setLoading(true);
            setEndDate(value);
          }}
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

export default UnitedStatesOnly;

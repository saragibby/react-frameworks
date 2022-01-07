import React, { useEffect } from "react";
import Select from "react-select";
import { US_STATES, defaultStateName } from "../constants";
import { find } from "lodash";

const options = US_STATES.map((stateName) => ({
  value: stateName,
  label: stateName,
}));

const StateSelect = ({ setLoading, setSelectedState }) => {
  const defaultSelected = find(
    options,
    (option) => option.value === defaultStateName
  );

  const handleChange = (selectedOption) => {
    setLoading(true);
    setSelectedState(selectedOption.value);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      defaultValue={defaultSelected}
    />
  );
};

export default StateSelect;

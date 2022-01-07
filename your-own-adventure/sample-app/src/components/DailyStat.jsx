import React, { useEffect, useState } from "react";
import { US_ONLY } from "../constants";
import BarChart from "./BarChart";

const DailyStat = ({
  loading,
  setLoading,
  startDate,
  endDate,
  selectedState,
}) => {
  const axios = require("axios");
  const [response, setResponse] = useState();

  useEffect(() => {
    const params = {
      min_date: `${startDate.toISOString().substr(0, 10)}T00:00:00.000Z`,
      max_date: `${endDate.toISOString().substr(0, 10)}T00:00:00.000Z`,
      state: selectedState,
    };

    axios
      .get(US_ONLY, {
        params,
      })
      .then(function (response) {
        console.log("response", response);
        setResponse(response);
      })
      .catch(function (error) {
        console.log("Data load error:", error);
      })
      .then(function () {
        // always executed
        setLoading(false);
      });
  }, [startDate, endDate, selectedState]);

  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && (
        <>
          <p>Total Records Returned: {response.data.length}</p>
          <BarChart responseData={response.data} />
        </>
      )}
      {/* {response &&
        response.data.map((item) => <p key={item.county}>{item.county}</p>)} */}
    </>
  );
};

export default DailyStat;

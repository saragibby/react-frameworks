import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { flatten, groupBy, keys, values } from "lodash";

const BarChart = ({ responseData }) => {
  const groupedByCombinedName = groupBy(
    responseData,
    (item) => item.combined_name
  );

  const groupedByDate = groupBy(responseData, (item) => item.date);

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "COVID Cases",
      },
    },
    scales: {
      y: {
        stacked: true,
      },
    },
  };
  const labels = keys(groupedByCombinedName);

  const datasets = values(groupedByDate).map((dateGroup, index) => {
    const displayDate = new Date(
      keys(groupedByDate)[index]
    ).toLocaleDateString();

    return [
      {
        label: `Confirmed (${displayDate})`,
        data: values(groupedByDate)[index].map((item) => item.confirmed),
        backgroundColor: "rgba(30, 80, 150, 1)",
        stack: `Stack ${index}`,
      },
      {
        label: `Deaths (${displayDate})`,
        data: values(groupedByDate)[index].map((item) => item.deaths),
        backgroundColor: "rgba(220, 20, 23, 1)",
        stack: `Stack ${index}`,
      },
    ];
  });

  const data = {
    labels,
    datasets: flatten(datasets),
  };

  return (
    <div style={{ minHeight: "2800px" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;

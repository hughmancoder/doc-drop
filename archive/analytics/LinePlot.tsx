import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface Props {
  labels: string[];
  data: number[];
  YaxisLabel?: string;
}

const LinePlot = ({ labels, data, YaxisLabel }: Props) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: YaxisLabel ?? "Quantity over Time",
        data: data,
        fill: false,
        borderColor: "rgba(180, 220, 245, 1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LinePlot;

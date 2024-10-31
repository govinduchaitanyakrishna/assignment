
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import Typography from '@mui/material/Typography';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

function EVChart({ data, chartType }) {
  const makeCounts = {};
  const modelYearCounts = {};

  data.forEach((item) => {
    const make = item.Make;
    const year = item['Model Year'];
    
    makeCounts[make] = (makeCounts[make] || 0) + 1;
    modelYearCounts[year] = (modelYearCounts[year] || 0) + 1;
  });

  const makeData = {
    labels: Object.keys(makeCounts),
    datasets: [
      {
        label: 'EVs by Make',
        data: Object.values(makeCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const yearData = {
    labels: Object.keys(modelYearCounts),
    datasets: [
      {
        label: 'EVs by Model Year',
        data: Object.values(modelYearCounts),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return chartType === "makeDistribution" ? (
    <>
      <Typography variant="h6">Distribution by Make</Typography>
      <Bar data={makeData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
    </>
  ) : (
    <>
      <Typography variant="h6">Growth over Model Years</Typography>
      <Line data={yearData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
    </>
  );
}

export default EVChart;

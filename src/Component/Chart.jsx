import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
);

function Chart({ arr = [], currencylogo, days }) {
  const prices = [];
  const date = [];
  
  arr.map ((i) => {
   date.push(new Date(i[0]).toLocaleDateString();
   prices.push(i[1]);
});

    

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={{
        labels: date,
        datasets: [
          {
            label: `Price in ${currencylogo}`,
            data: prices,
            borderColor: 'rgb(179, 84, 120)',
            backgroundColor: 'rgb(255,99,132,0.5)',
          },
        ],
      }}
    />
  );
}

export default Chart;

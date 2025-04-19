import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const SequenceChart = ({ terms }) => {
  const data = {
    labels: terms.map((_, index) => `Termi ${index + 1}`),
    datasets: [
      {
        label: 'Vlera e termave',
        data: terms,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
      },
      {
        label: 'Shuma kumulative',
        data: terms.map((_, i) => terms.slice(0, i + 1).reduce((sum, t) => sum + t, 0)),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Paraqitja Grafike e Vargut'
      }
    }
  };

  return (
    <>
      <h3>Vizualizimi</h3>
      <div style={{ height: '300px' }}>
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default SequenceChart;
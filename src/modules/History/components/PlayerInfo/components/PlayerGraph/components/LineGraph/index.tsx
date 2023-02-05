import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IGraph } from 'api/graphs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
};

const LineGraph: IFC<{ data: IGraph }> = (props) => {
  const { data } = props;

  const scoreArray = data.coordinates.map((game) => game.score);

  const graph = {
    labels: ['', ''],
    datasets: [
      {
        label: 'Игрок',
        data: scoreArray,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };

  return <Line options={options} data={graph} />;
};

export default LineGraph;

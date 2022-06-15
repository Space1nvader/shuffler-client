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
import { IFC } from 'types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
};

const labels = ['January', 'February', 'March'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 40, 10, 5, 1, 1, 22, 5, 22, 55, 1, 0, 10, 22, 30],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: [0, 10, 5, 2, 20, 30, 45],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
};

const LineGraph: IFC<{ data: IGraph }> = (props) => {
  const { data: graph } = props;
  console.log(graph);

  return <Line options={options} data={data} />;
};

export default LineGraph;

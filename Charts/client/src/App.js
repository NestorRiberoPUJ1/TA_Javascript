import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';
import './App.css';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);

const App = () => {

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        fill: true,
        data: [50, 40, 30, 20, 10, -10, -20],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
        
      },
      {
        label: 'Dataset 3',
        data: [5, 10, 15, 20, 15, 10, 5],
        backgroundColor: 'rgb(0, 255, 192)',
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const [stateData, setStateData] = useState({
    labels,
    datasets: []
  });

  useEffect(() => {
    setTimeout(() => {
      setStateData(data);
    }, 5000)
  }, [])

  return (

    <div className="App" >
      <h1>CHARTJS</h1>

      <Chart type='bar' options={options} data={stateData} />

      <Chart type='line' options={optionsLine} data={stateData} />

    </div >
  );
}

export default App;

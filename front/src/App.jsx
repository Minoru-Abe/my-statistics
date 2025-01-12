import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import "./App.css";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [statistics, setStatistics] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [weight, setWeight] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [alcoholConsumption, setAlcoholConsumption] = useState(0);

  const addStatistics = () => {
    const newStatistic = {
      date: date,
      weight: weight,
      sleepHours: sleepHours,
      alcoholConsumption: alcoholConsumption
    };

    const index = statistics.findIndex(stat => stat.date === date);
    if (index !== -1) {
      const updatedStatistics = [...statistics];
      updatedStatistics[index] = newStatistic;
      setStatistics(updatedStatistics);
    } else {
      setStatistics([...statistics, newStatistic]);
    }
    setDate(new Date().toISOString().split("T")[0]);
    setWeight(0);
    setSleepHours(0);
    setAlcoholConsumption(0);
    console.log(statistics);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Input Area</Link> | <Link to="/statistics">Statistics Graph</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Input Area</h1>
              <form>
                <div>
                  <label>Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {date}
                </div>
                <div>
                  <label>Weight (kg):</label>
                  <input
                    type="number"
                    step="0.1"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  {weight}
                </div>
                <div>
                  <label>Sleep Hours:</label>
                  <input
                    type="number"
                    step="0.1"
                    name="sleepHours"
                    value={sleepHours}
                    onChange={(e) => setSleepHours(e.target.value)}
                  />
                  {sleepHours}
                </div>
                <div>
                  <label>Alcohol Consumption (Beer 350ml cans):</label>
                  <input
                    type="number"
                    step="0.1"
                    name="alcoholConsumption"
                    value={alcoholConsumption}
                    onChange={(e) => setAlcoholConsumption(e.target.value)}
                  />
                  {alcoholConsumption}
                </div>
                <button type="button" onClick={addStatistics}>
                  Add Statistics
                </button>
              </form>
            </div>
          } />
          <Route path="/statistics" element={<StatisticsGraph statistics={statistics} />} />
        </Routes>
      </div>
    </Router>
  );
}

function StatisticsGraph({ statistics }) {
  const data = {
    labels: statistics.map(stat => stat.date),
    datasets: [
      {
        label: 'Weight (kg)',
        data: statistics.map(stat => stat.weight),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Sleep Hours',
        data: statistics.map(stat => stat.sleepHours),
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
      {
        label: 'Alcohol Consumption',
        data: statistics.map(stat => stat.alcoholConsumption),
        borderColor: 'rgba(255,159,64,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Statistics Graph</h2>
      <Line data={data} />
    </div>
  );
}

export default App;
import { useState } from "react";
import "./App.css";

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
    console.log(statistics);

  };

  return (
    <div className="App">
      <h1>InputArea</h1>
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
  );
}

export default App;

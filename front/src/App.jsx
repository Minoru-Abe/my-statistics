import { useState } from "react";
import "./App.css";

function App() {
  const [statistics, setStatistics] = useState({
    date: "",
    weight: "",
    sleepHours: "",
    alcoholConsumption: "",
  });
  const addStatistics = () => {
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatistics((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
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
            value={statistics.data}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            step="0.1"
            name="weight"
            value={statistics.weight}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sleep Hours:</label>
          <input
            type="number"
            step="0.1"
            name="sleepHours"
            value={statistics.sleepHours}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alcohol Consumption (Beer 350ml cans):</label>
          <input
            type="number"
            step="0.1"
            name="alcoholConsumption"
            value={statistics.alcoholConsumption}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={addStatistics}>
          Add Statistics
        </button>
      </form>
    </div>
  );
}

export default App;

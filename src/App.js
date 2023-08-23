import "./App.css";
import "./background.jpg";
import Forecast from "./Forecast";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="New York" />
        <Forecast />
      </div>
      <footer>
        <a
          href="https://github.com/mhserrano/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by <strong>Maria Serrano</strong>
      </footer>
    </div>
  );
}

import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather />
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
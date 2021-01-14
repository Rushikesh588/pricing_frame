import "./App.css";
import Header from "./components/Header";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="app">
      <div className="app_section">
        <div className="app_first">
          <h1>Features</h1>
        </div>

        <div className="app_sec">
          <Header name="Starter" price="0" tag="Go Starter" />
          <Header name="Professional" price="25" tag="Go Professional" />
          <Header name="Organization" price="50" tag="Go Organization" />
        </div>
      </div>

      <Chart />
    </div>
  );
}

export default App;

import "./App.css";
import Quiz from "./components/component";
import data from "./components/data.json";
//import Alert from "./components/alert";
function App() {
  return (
    <div className="App">
      <Quiz list={data} />
    </div>
  );
}

export default App;

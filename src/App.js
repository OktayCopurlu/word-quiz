import "./App.css";
import GetData from "./components/component";
import data from "./components/rasim.json";

function App() {
  return <div className="App">
    <GetData list={data}/>
    
    </div>;
}

export default App;

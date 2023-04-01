import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

function App() {
  return (
    <div className="App">
      <div className = "flex flex-row">
        <div className = "basis-1/4">
          <Sidebar/>
        </div>
        <div className = "basis-1/2">
          <Feed />
        </div>
        <div className = "basis-1/4">
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default App;

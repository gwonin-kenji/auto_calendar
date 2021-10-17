import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Note2 from "./components/Note2";
import Simulator from "./components/Simulator";

function App() {
  return (
    <div className="App">
      <Header />
      <Note2 />
      <Simulator className="content" />
    </div>
  );
}

export default App;

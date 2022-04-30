import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/header/Nav";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="" */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

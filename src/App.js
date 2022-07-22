import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page from "./Page";
import ScrollPage from "./scrollPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/scroll" element={<ScrollPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Carousel } from "./components/reusable/Carousel/Carousel";
import { Main } from "./Main";

export function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/recommended" element={<Carousel />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

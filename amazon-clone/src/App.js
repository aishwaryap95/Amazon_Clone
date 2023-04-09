import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    //BLM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

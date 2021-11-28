import "./App.css";
import Home from "./components/Home";
import InitialMenu from "./components/InitialMenu";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

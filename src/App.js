import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Gas from "./components/Gas";
import UserPage from "./components/UserPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Solidos from "./components/Solidos";
import Peligrosos from "./components/Peligrosos";
import PapelCarta from "./components/PapelCarta";
import PapelOficio from "./components/PapelOficio";
import Organicos from "./components/Organicos";
import Aprovechados from "./components/Aprovechados";
import Agua from "./components/Agua";
import Energia from "./components/Energia";
import Gasolina from "./components/Gasolina";
import Prove from "./components/prove";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/gas" element={<Gas />} />
          <Route path="/solidos" element={<Solidos />} />
          <Route path="/peligrosos" element={<Peligrosos />} />
          <Route path="/papelcarta" element={<PapelCarta />} />
          <Route path="/papeloficio" element={<PapelOficio />} />
          <Route path="/organicos" element={<Organicos />} />
          <Route path="/aprovechados" element={<Aprovechados />} />
          <Route path="/agua" element={<Agua />} />
          <Route path="/energia" element={<Energia />} />
          <Route path="/gasolina" element={<Gasolina />} />
          <Route path="/prove" element={<Prove />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

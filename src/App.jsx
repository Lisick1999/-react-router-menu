import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu.tsx";
import { HomePage } from "./components/HomePage/HomePage.tsx";
import { DriftPage } from "./components/DriftPage/DriftPage.tsx";
import { TimeAttackPage } from "./components/TimeAttackPage/TimeAttackPage.tsx";
import { ForzaPage } from "./components/ForzaPage/ForzaPage.tsx";

export function App() {
  return (
    <div className="page">
      <Menu/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/drift" element={<DriftPage/>}/>
        <Route path="/timeattack" element={<TimeAttackPage/>}/>
        <Route path="/forza" element={<ForzaPage/>}/>
      </Routes>
    </div>
  );
};

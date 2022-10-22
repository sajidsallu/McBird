import Mainform from "./components/Mainform/Mainform";
import './App.scss'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Second from "./components/Second/Second";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Mainform />}/>
          <Route path="/second" element={<Second />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

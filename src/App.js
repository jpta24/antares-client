import './App.css';
import Navbar from "./components/Navbar/Navbar2";

import HomePage from "./pages/HomePage/HomePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />
      </Routes>      
    </div>
  );
}

export default App;

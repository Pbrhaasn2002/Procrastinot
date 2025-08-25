import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import Flashcards from "./pages/Flashcards"; 
import { About } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/flashcards" element={<Flashcards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

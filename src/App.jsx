import "./App.css";
import { Menu } from "./componentes/Menu";
import { About } from "./pages/about";
import { Task } from "./pages/Task.1";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/task" element={<Task />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

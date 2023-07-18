import "./App.css";
import { Menu } from "./componentes/Menu";
import { About } from "./pages/about";
import { Task } from "./pages/Task.1";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Theme } from "./tema";
import YourComponent from "./componentes/Oscuro";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode="light" />
      <YourComponent />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/task" element={<Task />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;

// frontend/src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Docs from "./pages/Docs";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/docs" element={<Docs />} />
      
    </Routes>
  );
}

export default App;

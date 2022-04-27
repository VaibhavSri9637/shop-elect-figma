import { Routes, Route } from "react-router-dom";
import Chatone from "./pages/Chatone";

function App() {
  return (
    <Routes>
      <Route path="/chat-show" element={<Chatone />} />
    </Routes>
  );
}

export default App;

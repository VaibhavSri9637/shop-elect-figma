import { Routes, Route } from "react-router-dom";
import Chatone from "./pages/Chatone";
import DribbleChat from "./pages/DribbleChat";

function App() {
  return (
    <Routes>
      <Route path="/chat-show" element={<Chatone />} />
      <Route path="/dribble-chat" element={<DribbleChat />} />
    </Routes>
  );
}

export default App;

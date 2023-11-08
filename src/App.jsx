import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Text from "./Text/Text";

import Joke from "./Api/Joke";
import Memo from "./Api/Memo";
import Hooks from "./Hooks/Hooks";

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/text" element={<Text />} />
        <Route path="/useEffect" element={<Joke />} />
        <Route path="/useMemo" element={<Memo/>} />
        <Route path="/hooks" element={<Hooks/>} />
      </Routes>
    </>
  );
}

export default App;

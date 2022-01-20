import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyCartPage from "./pages/MyCartPage";
import ComparePage from "./pages/ComparePage";

function App() {
  const [compare, setCompare] = useState([]);

  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage compare={compare} setCompare={setCompare} />}
      />
      <Route path='/my-cart' element={<MyCartPage />} />
      <Route path='/compare' element={<ComparePage compare={compare} />} />
    </Routes>
  );
}

export default App;

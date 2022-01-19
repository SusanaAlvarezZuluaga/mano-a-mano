import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MyCartPage from './pages/MyCartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my-cart" element={<MyCartPage />} />
    </Routes>
  );
}

export default App;

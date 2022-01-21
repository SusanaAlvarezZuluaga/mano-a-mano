import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MyCartPage from './pages/MyCartPage';
import AuthenticatePage from './pages/AuthenticatePage';
import CheckoutAddressInfoPage from './pages/CheckoutAddressInfoPage';
import RegisterPage from './pages/RegisterPage';
import UserInfoPage from './pages/UserInfoPage';
import UserInfoContext from './contexts';
import ThanksForPurchase from './pages/ThanksForPurchasePage';
import ComparePage from './pages/ComparePage';
import './styles.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('Rua Herois de Quionga 54C');
  const [country, setCountry] = useState('Portugal');
  const [city, setCity] = useState('Lisbon');
  const [postalCode, setPostalCode] = useState('1170-088');
  const [name, setName] = useState('Susana Alvarez');
  const [mobileNumber, setMobileNumber] = useState('+351 912648753');
  const [compare, setCompare] = useState([]);

  return (
    <UserInfoContext.Provider
      value={{
        email: email,
        setEmail: setEmail,
        password: password,
        setPassword: setPassword,
        country: country,
        setCountry: setCountry,
        city: city,
        setCity: setCity,
        postalCode: postalCode,
        setPostalCode: setPostalCode,
        mobileNumber: mobileNumber,
        name: name,
        setName: setName,
        setMobileNumber: setMobileNumber,
        address: address,
        setAddress: setAddress,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={<HomePage compare={compare} setCompare={setCompare} />}
        />
        <Route path="/my-cart" element={<MyCartPage />} />
        <Route path="/authenticate" element={<AuthenticatePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user-info" element={<UserInfoPage />} />
        <Route path="/checkout" element={<CheckoutAddressInfoPage />} />
        <Route path="/finalized-purchase" element={<ThanksForPurchase />} />
        <Route path="/compare" element={<ComparePage compare={compare} />} />
      </Routes>
    </UserInfoContext.Provider>
  );
}

export default App;

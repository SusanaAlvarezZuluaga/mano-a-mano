import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MyCartPage from './pages/MyCartPage';
import AuthenticatePage from './pages/AuthenticatePage';
import CheckoutAddressInfoPage from './pages/CheckoutAddressInfoPage';
import RegisterPage from './pages/RegisterPage';
import UserInfoContext from './contexts';
import './styles.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
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
        firstName: firstName,
        setFirstName: setFirstName,
        lastName: lastName,
        setLastName: setLastName,
        setMobileNumber: setMobileNumber,
        address: address,
        setAddress: setAddress,
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-cart" element={<MyCartPage />} />
        <Route path="/authenticate" element={<AuthenticatePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout-address" element={<CheckoutAddressInfoPage />} />
      </Routes>
    </UserInfoContext.Provider>
  );
}

export default App;

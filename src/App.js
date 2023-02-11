import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from "./Component/Home"
import Coins from "./Component/Coins"
import Exchanges from "./Component/Exchanges"
import CoinDetails from "./Component/CoinDetails"


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges/>} />
          <Route path="/coins/:id" element={<CoinDetails/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

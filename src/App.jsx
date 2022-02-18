import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';

import Community from './components/Community/Community';
import Contact from './components/Contact/Contact';
import Films from './components/Films/Films';
import Help from './components/Help/Help';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Technology from './components/Technology/Technology';

import './sass/main.scss';

const App = () => {
  
    return (


    <BrowserRouter>
        <NavBar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path="contact" element={<Contact />} />
            <Route path="films" element={<Films />} />
            <Route path="help" element={<Help />} />
            <Route path="shop" element={<Shop />} />
            <Route path="technology" element={<Technology />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;

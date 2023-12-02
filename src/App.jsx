import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GlobalProvider, useGlobalContext } from './Components/context/global.context';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';

const App = () => {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
  
};

export default App;

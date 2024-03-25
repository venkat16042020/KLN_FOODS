import logo from './logo.svg';
import './App.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from 'react';
import Home from './/components/home'

import 'bootstrap/dist/css/bootstrap.min.css';//this will get bootstrap style to app


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Contatti from './pages/Contatti';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

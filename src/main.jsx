import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Contatti from './pages/Contatti';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contatti" element={<Contatti />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Contatti from './pages/Contatti';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/curriculum" element={<Curriculum />} />
    <Route path="/contatti" element={<Contatti />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

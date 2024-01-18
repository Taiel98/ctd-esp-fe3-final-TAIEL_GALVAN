import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/Routes/Home'element={<Home/>} />
          <Route path='/Routes/Detail'element={<Detail/>} />
          <Route path='/Routes/Favs/:id'element={<Favs/>} />
          <Route path='/Routes/Contact'element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



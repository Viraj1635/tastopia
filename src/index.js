import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import Search from './Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
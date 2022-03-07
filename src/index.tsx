import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
// import AppHook from './AppHook';
import './root.css';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root'),
);
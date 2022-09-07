import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { createRoot } from "react-dom/client";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
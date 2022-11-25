import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from './contexts/cart-context/cart-context';
import { FilterProvider } from './contexts/filter-context/filter-context';
import { NavDropdownProvider } from './contexts/nav-context/nav-dropdown-context';


import './index.css';
import App from './App';
import NavDropdownComp from './components/nav-dropdown/nav-dropdown-comp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <NavDropdownProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </NavDropdownProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

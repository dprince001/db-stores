import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from './contexts/cart-context/cart-context';
<<<<<<< Updated upstream
=======
import { FilterProvider } from './contexts/filter-context/filter-context';
import { NavDropdownProvider } from './contexts/nav-context/nav-dropdown-context';
>>>>>>> Stashed changes


import './index.css';
import App from './App';
import NavDropdownComp from './components/nav-dropdown/nav-dropdown-comp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
<<<<<<< Updated upstream
        <App />
=======
        <NavDropdownProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </NavDropdownProvider>
>>>>>>> Stashed changes
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

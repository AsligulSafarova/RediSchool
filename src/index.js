import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import { RecipesProvider } from './Context/RecipieContext';
import { CartProvider } from './Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <RecipesProvider>
    <CartProvider>
       <App />
    </CartProvider>
  </RecipesProvider>
  </BrowserRouter>
   );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import { RecipesProvider } from './Context/RecipieContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <RecipesProvider>
     <App />
  </RecipesProvider>
  </BrowserRouter>
   

);

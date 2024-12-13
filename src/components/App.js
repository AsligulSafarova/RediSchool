
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Favorite from "../Pages/Favorite";
import Recipies from "../Pages/Recipies";
import Login from "../Pages/Login";
import Main from "./Main";
import Basket from "../Pages/Basket";
import CartDetail from "./CartDetail";


function App() {
     return (
    <Routes>
      <Route path = "/"  element = {<Layout/>}>
      <Route index  element = {<Main/>}/>
      <Route path = "Favorite"  element = {<Favorite/>}/>
      <Route path = "addRecipies"  element = {<Recipies/>}/>
      <Route path = "cartDetail/:id"  element = {<CartDetail/>}/>
      <Route path = "basket"  element = {<Basket/>}/>
      <Route path = "login"  element = {<Login/>}/>
      </Route>
    </Routes>
 
  )}

export default App;

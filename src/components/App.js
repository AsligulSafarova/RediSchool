
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Favorite from "../Pages/Favorite";
import Recipies from "../Pages/Recipies";
import Login from "../Pages/Login";
import Main from "./Main";
function App() {
  return (
    <Routes>
      <Route path = "/"  element = {<Layout/>}>
      <Route index  element = {<Main/>}/>
      <Route path = "Favorite"  element = {<Favorite/>}/>
      <Route path = "addRecipies"  element = {<Recipies/>}/>
      <Route path = "login"  element = {<Login/>}/>
      </Route>
    </Routes>
 
  );}

export default App;

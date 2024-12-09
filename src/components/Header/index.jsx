import React from 'react'
import SearchRecepies from '../SearchRecepies';
import style from "../../Styles/header.module.scss";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
  <nav className={style.header}>
      <h1><NavLink to ="/">EasyCook </NavLink></h1>
      <SearchRecepies/>
      <ul>
      <li><NavLink to = "/favorite"> <FaHeart style = {{fontSize:"3.5rem", paddingTop:"5px", color:"red"}}/></NavLink></li>
      <li><NavLink to = "/addRecipies"> Recipes</NavLink></li>
      <li><NavLink to ="/login">LogIn</NavLink></li>
      </ul>
 </nav>
  )
}

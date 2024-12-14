import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import SearchRecepies from '../SearchRecepies';
import style from "../../Styles/header.module.scss";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Easy.svg";
import { BsBasket3 } from "react-icons/bs";
import { RecipieContext } from '../../Context/RecipieContext';

export default function Header() {
  const {basket,favorite,}  = useContext(CartContext);
  const {recipiebasket,recipieFavorite} = useContext(RecipieContext);
  const allCards = [...basket,...recipiebasket];
  const summOfAllFavorites = [...favorite, ...recipieFavorite]
  return (
  <nav className={style.header}>
      <h1><NavLink to ="/"><img src={logo} alt="" style={{width:"180px", height:"130px", backgroundColor:"transporant", marginTop:"25px"}}/> </NavLink></h1>
      <SearchRecepies/>
      <ul>
      <li><NavLink to = "/favorite"> <FaHeart style = {{fontSize:"3.5rem", paddingTop:"5px", color:"red"}}/><span style={{ position:"absolute", right:"360px"}}>{ summOfAllFavorites.length? summOfAllFavorites.length:""}</span></NavLink></li>
      <li><NavLink to = "/addRecipies"> Recipes</NavLink></li>
      <li><NavLink to ="/basket"> <p> <BsBasket3/> <span>{allCards.length?allCards.length:""}</span></p></NavLink></li>
      <li><NavLink to ="/login">LogIn</NavLink></li>
      </ul>
 </nav>
  )
}

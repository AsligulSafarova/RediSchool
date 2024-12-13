import React, {useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import style from "../../Styles/cartDetail.module.scss";
import { FaBookAtlas } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {useNavigate } from "react-router-dom"

export default function CartDetail() {
      const {detail}  = useContext(CartContext)
      const {title, image, ingredients, book}  = detail;
      const navigate = useNavigate()
  return (
    <div className = {style.container}>
   <button style = {{padding:"10px", width:"120px", margin:"10px", backgroundColor:"green",
       color:"white", border:"none",
        borderRadius:"15px"}} onClick = {()=>navigate(-1)}> <FaLongArrowAltLeft /> Back</button>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <h4>  You can find more than <span>{book} </span> in our <span> <FaBookAtlas /></span>Book </h4>
      <h3>Ingredients:</h3>
      <ol>
        {/* Mapping over ingredients array and rendering each ingredient */}
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ol>
    <div className={style.buttons}>
      <button>Buy a Book</button>
      <button> Add to a Favorite</button>
    </div>
    </div>
  )}

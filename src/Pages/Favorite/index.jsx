import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { RecipieContext } from '../../Context/RecipieContext';
import style from "../../Styles/favorite.module.scss";
import { FaBookAtlas } from "react-icons/fa6";
import {useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Favorite() {
  const { favorite, addTobasket, setFavorite } = useContext(CartContext);
  const { recipieFavorite,  setRecepieFavorite} = useContext(RecipieContext);
  const navigate = useNavigate();

 const allFavoriteCards = [...favorite, ...recipieFavorite];

 
 const deleteFavorite = (id) => {
  const delItemFromFavorite = favorite.filter(item => item.id !== id);
  const delItemFromRecipieFavorite = recipieFavorite.filter(item => item.idMeal !== id );

  setFavorite(delItemFromFavorite);
  setRecepieFavorite(delItemFromRecipieFavorite);
};


  return (
    <div>
      <button style = {{padding:"10px", width:"120px", margin:"10px", backgroundColor:"green",
       color:"white", border:"none",
        borderRadius:"15px"}} onClick = {()=>navigate(-1)}> <FaLongArrowAltLeft /> Back</button>
    <div className={style.container}>
    
      {
         allFavoriteCards.length > 0 ? (
          allFavoriteCards.map((elem) => {
            return ( 
              <div key={elem.id?elem.id:elem.idMeal} className={style.favorite}>
                  <h1>{elem.title || elem.strMeal || "No Title Available"}</h1>
                <img src={elem.image?elem.image:elem.strMealThumb} alt="" />
                <p onClick={()=> deleteFavorite(elem.id?elem.id:elem.idMeal)}><RiDeleteBin5Line /></p>
                
    <ol style = {{fontSize:"18px", paddingLeft:"10px"}}>
     
        {
        elem.ingredients?
        elem.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        )):""}
         <h4>  You can find more than <span>{elem.book} </span> in our <span> <FaBookAtlas /></span>Book </h4>
         <h3>Ingredients:</h3>
      </ol>
      <div className={style.buttons}>
      <button onClick={()=>addTobasket(elem.id)}>Buy a Book</button>
    </div>
    </div>
    );})
        ) : (
          <h2>No Favorite Recipes</h2>
        )
      }
    </div>
    </div>
  );
}

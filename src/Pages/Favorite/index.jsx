import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import style from "../../Styles/favorite.module.scss";
import { FaBookAtlas } from "react-icons/fa6";
import {useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Favorite() {
  const { favorite, addTobasket, setFavorite } = useContext(CartContext);
  const navigate = useNavigate();

  const deleteFavorite = (id)=>{
    const delItem = favorite.filter(item => item.id !== id)
    return setFavorite(delItem)}
  return (
    <div>
      <button style = {{padding:"10px", width:"120px", margin:"10px", backgroundColor:"green",
       color:"white", border:"none",
        borderRadius:"15px"}} onClick = {()=>navigate(-1)}> <FaLongArrowAltLeft /> Back</button>
    <div className={style.container}>
    
      {
        favorite.length > 0 ? (
          favorite.map((elem) => {
            const { image, title, ingredients, id ,book} = elem;
            return ( 
              <div key={id} className={style.favorite}>
                     <h1>{title}</h1>
                <img src={image} alt={title} />
                <p onClick={()=> deleteFavorite(elem.id)}><RiDeleteBin5Line /></p>
                <ol style = {{fontSize:"18px", paddingLeft:"10px"}}>
     
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
         <h4>  You can find more than <span>{book} </span> in our <span> <FaBookAtlas /></span>Book </h4>
         <h3>Ingredients:</h3>
      </ol>
      <div className={style.buttons}>
      <button onClick={()=>addTobasket(id)}>Buy a Book</button>
    </div>
              </div>
            );
          })
        ) : (
          <h2>No Favorite Recipes</h2>
        )
      }
    </div>
    </div>
  );
}

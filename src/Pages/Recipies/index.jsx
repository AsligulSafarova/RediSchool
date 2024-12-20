import React, { useContext} from 'react';
import style from "../../Styles/Recipies.module.scss";
import { RecipieContext } from '../../Context/RecipieContext';
import { FaLongArrowAltLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom"


export default function Recipies() {
  const {recepie,addToBasket ,   addToFavorite} = useContext(RecipieContext);
  const navigate = useNavigate();
  console.log("rr",recepie);

  return (
  <div>
     <button style = {{padding:"10px", width:"120px", margin:"10px", backgroundColor:"green",
       color:"white", border:"none",
        borderRadius:"15px"}} onClick= {()=>navigate("/")}> <FaLongArrowAltLeft /> Back</button>
    <div className={style.container}>
        
     {
      recepie.map((elem)=><div key={elem.id} className={style.recipies}>
        <h1>{elem.strMeal}</h1>
        <img src={elem.strMealThumb} alt={elem.strMeal}  />
        <div className={style.buttons}>
        <button onClick = {()=>addToBasket(elem.id)}>Buy a Book</button>
        <button onClick={()=>addToFavorite(elem.id)}> Add to a Favorite</button>
       </div>   
      </div>)
     }
    </div>
    </div>
  )}

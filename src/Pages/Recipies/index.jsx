import React, {useState, useEffect, useContext} from 'react';
import style from "../../Styles/Recipies.module.scss";
import { RecipieContext } from '../../Context/RecipieContext';


export default function Recipies() {
  const {recepie} = useContext(RecipieContext)

  return (
    <div className={style.container}>
     {
      recepie.map((elem)=><div key={elem.id} className={style.recipies}>
        <h1>{elem.strMeal}</h1>
        <img src={elem.strMealThumb} alt={elem.strMeal}  />
        
      </div>)
     }
    </div>
  )}

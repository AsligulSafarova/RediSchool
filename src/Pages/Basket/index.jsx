import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { FaBookAtlas } from "react-icons/fa6";
import  style from "../../Styles/basket.module.scss";
import { FaCcVisa, FaCcMastercard, FaCcPaypal   } from "react-icons/fa";
import {RecipieContext  } from '../../Context/RecipieContext';

export default function Basket() {
  const {basket,incrementCount,decrementItem } = useContext(CartContext);
  const {recipiebasket} = useContext(RecipieContext);

  const combineBasket = [...basket, ...recipiebasket];
  console.log("combine", combineBasket);
  

  return (
    <div className={style.container}>
      <div>
      {
        combineBasket?.map((elem=>{
          const {title,image,book,strMeal,strMealThumb, count} = elem;
         return <div key={elem.id?elem.id: elem.idMeal} className={style.basket}>
            <h1>{title?title:strMeal}</h1>
            <img src={image? image:strMealThumb} alt=""/>
            <h4>  You can find more than <span>{book?book:""} </span> in our <span> <FaBookAtlas /></span>Book </h4>
            <p>10$</p>
            <div className={style.count}>
              <button onClick={()=>incrementCount(elem.id?elem.id:elem.idMeal)}>+</button>
              <h5>count:{count?count:""}</h5>
              <button onClick={()=>decrementItem(elem.id?elem.id:elem.idMeal)}>-</button>
            </div>
          </div>
        }))
      }</div>
      <div className={style.total}>
        <h1>Total:150$</h1>
        <h6>You can Pay with:</h6>
        <div className={style.icons}>
        <p><FaCcPaypal /></p>
        <p><FaCcVisa /></p>
        <p><FaCcMastercard /></p>
        </div>
        
      </div>
    </div>
  )}

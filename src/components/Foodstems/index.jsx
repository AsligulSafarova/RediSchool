import React from 'react';
import styles from "../../Styles/FoodItem.module.scss"

export default function FoodsItems({image, title, text}) {
  return (
    <div className={styles.foodItem}>
      <h1>{title}</h1>
     <img src={image} alt="cards"/>
     <div className= {styles.button}>
      <button>Buy Recipes</button>
     <button>Add to Favorite</button>
     </div>
     
    </div>
  )
}

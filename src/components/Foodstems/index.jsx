import React, {useContext} from 'react';
import styles from "../../Styles/FoodItem.module.scss";
import { CartContext } from '../../Context/CartContext';

export default function FoodsItems({image, title, text, id}) {
  const {addToFavorite} = useContext(CartContext);
  return (
    <div className={styles.foodItem}>
      <h1>{title}</h1>
     <img src={image} alt="cards"/>
     <div className= {styles.button}>
      <button onClick={()=>addToFavorite(id)}>Buy Recipes</button>
     <button>Add to Favorite</button>
     </div>
     
    </div>
  )
}

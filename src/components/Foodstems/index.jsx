import React, { useContext } from 'react';
import styles from "../../Styles/FoodItem.module.scss";
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function FoodsItems({ image, title, text, id }) {
  const { addToFavorite, showDetails ,addTobasket} = useContext(CartContext);
  const navigate = useNavigate();
  
  // Function to handle showing details
  const showDetailss = () => showDetails(id);

  return (
    <div className={styles.foodItem} >
      <div onClick={() => { showDetailss(); navigate(`/cartDetail/${id}`); }} style = {{width:"100%"}}>
         <h1>{title}</h1>
         <img src={image } alt={title} />
      </div>   
      <div className={styles.button}>
        <button  onClick={()=>addTobasket(id)}>Buy a Book</button>
        <button onClick={() => addToFavorite(id)}>
          Add to Favorite
        </button>
      </div>
    </div>
  );
}

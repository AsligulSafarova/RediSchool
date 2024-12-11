import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import style from "../../Styles/favorite.module.scss"

export default function Favorite() {
  const { favorite } = useContext(CartContext);
  return (
    <div>
      <h1>Favorite Page</h1>
      {
        favorite.length > 0 ? (
          favorite.map((elem) => {
            const { image, title, text, id } = elem;
            return ( // Make sure to return the JSX inside the map
              <div key={id} className={style.favorite}>
                     <h1>{title}</h1>
                <img src={image} alt={title} />
                <p>X</p>
              </div>
            );
          })
        ) : (
          <h2>No Favorite Recipes</h2>
        )
      }
    </div>
  );
}

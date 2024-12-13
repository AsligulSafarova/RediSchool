import React from 'react';
import style from "../../Styles/main.module.scss";
import redSoup from "../../assets/red.jpg"
import Cart from '../Cart';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  return (

    <div>
    <div className={style.banner} >
      <h1>
      Good Food, Good Mood
      </h1>
      <p>Eating well is more than just a choice; it’s a lifestyle. By prioritizing fresh, nutrient-dense foods,
         you can improve not only your physical health but also your mental clarity and emotional balance. Healthy eating
          empowers you to live life to the fullest,
         with the energy and vitality needed to chase your dreams and savor every moment</p>
    </div>
    <div className={style.secondContainer}>
      <div className={style.infos}>
       <p>We are obsessed whith</p>
       <h2>Healthy Eating made Easy</h2>  
       <p>Explore our healthy Recipes options.</p>
      </div>

      <div className={style.img}>
        <img src={redSoup} alt="food"/>
      </div>
     
 
    <div className={style.buttons}>
      <button onClick={()=>navigate("/addRecipies")}>Explore Recipes</button>
      <p>Quick , easy, healthy and more than  <span> +10000 </span> Recipes</p>
    </div>   
   </div>
  <Cart/>

      </div>
    
  );
}

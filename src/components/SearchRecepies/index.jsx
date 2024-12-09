import React from 'react';
import style from "../../Styles/SearchRecepies.module.scss";
import { IoSearch } from "react-icons/io5";

export default function SearchRecepies() {
  return (
    <div className={style.input}>
      <p><IoSearch style={{color:"black", fontSize:"1.5rem", marginTop:".5rem", marginLeft:"1rem"}} /></p>
      <input type="text" placeholder='Search Recipies'  />
    </div>
  )
}

import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import FoodsItems from '../Foodstems';
import styles from "../../Styles/Foods.module.scss";

export default function Cart() {
  const [more, setMore] = useState(6)
  const { cart, error, loading } = useContext(CartContext);

  const isAllShown = () =>{
    if ( more >= cart.length){
      setMore(6)
    }else{
      setMore(prevMore => prevMore+3)
    }}
     
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className={styles.foods}>
        {  cart.slice(0,more).map((elem) => <FoodsItems key={elem.id} {...elem} />) } </div> 
   
      <button
        style={{
          width: "150px",
          backgroundColor: "green",
          padding: "10px",
          border: "none",
          borderRadius: "15px",
          marginTop: "-15px",
          marginBottom: "10px",
          color: "white",
          cursor: "pointer",
        }} 
        onClick = {isAllShown}>
          {
          more >= cart.length? "Less":"More"
          }
      
      </button>
    </>)}

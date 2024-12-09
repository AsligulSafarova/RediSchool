import React, {useState, useEffect} from 'react';
import FoodsItems from '../Foodstems';
import styles from "../../Styles/Foods.module.scss"

export default function Foods() {
  const [recipies, setRecipies] = useState([])
  const url =  "http://localhost:5000/recipes";
  console.log(recipies);
  

  useEffect(()=>{
  fetch(url)
  .then(resp=>resp.json())
  .then(data=>setRecipies(data))
  .catch(error=>console.error("Error fetching recipes",error))

  },[])
  return (
    <>
    <div className={styles.foods}>
     {
      recipies.map(elem=><FoodsItems key={elem.id} {...elem}/>)
     }
    
    </div>
     <button>More</button>
    </>
  )
}

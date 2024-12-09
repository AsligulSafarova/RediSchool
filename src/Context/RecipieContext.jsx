import { createContext, useState, useEffect } from "react";

export const  RecipieContext = createContext({});


export  const RecipesProvider = ({children})=>{
      const [recepie, setRecepie] = useState([])
      const [search, setSearch] = useState("chicken_breast");
      console.log(recepie);
     
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    
      useEffect(()=>{
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>setRecepie(data.meals))
        .catch(error=>console.error(error))
      },[])

const value = {search, setSearch,recepie, setRecepie}
      return <RecipieContext.Provider value = {value}>
            {children}
      </RecipieContext.Provider>
}
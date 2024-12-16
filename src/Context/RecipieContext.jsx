import { createContext, useState, useEffect } from "react";

export const RecipieContext = createContext({
  search: "",
  setSearch: () => {}, // Default no-op function
  recepie: [],
  setRecepie: () => {}, // Default no-op function
});

export const RecipesProvider = ({ children }) => {
  const [recepie, setRecepie] = useState([]);
  const [recipiebasket, setRecepieBasket] = useState([]);
  const [recipieFavorite, setRecepieFavorite] = useState([]);
  const [search, setSearch] = useState("chicken");
  console.log("res",recepie);
  

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;

  const addToBasket = (id) => {
    const currentItem = recepie.find(item => item.id === id || item.idMeal === id);
    
    if (currentItem) {
      setRecepieBasket((prevBasket) => {
        // Check if the item already exists in the basket
        const existingItem = prevBasket.find(elem => elem.id === id || elem.idMeal === id);
  
        if (existingItem) {
          return prevBasket.map(elem =>
            elem.id === id || elem.idMeal === id
              ? { ...elem, count: elem.count + 1 }
              : elem
          );
        }
  
        // Add a new item to the basket with a count of 1
        return [...prevBasket, { ...currentItem, count: 1 }];
      });
    }
  };
  

  const incrementCountRecepie = (id)=> {
    setRecepieBasket(prevBasket=>{
     return  prevBasket.map((elem)=> elem.idMeal === id || elem.id === id ? {...elem, count:elem.count +1}:elem)
    })
  };

  const decrementCountRecepie = (id)=>{
    setRecepieBasket(prevBasktet =>{
      return prevBasktet.map((elem)=> elem.id === id || elem.idMeal === id?
       {...elem, count:elem.count -1}:elem).filter(elem=>elem.count>0)
    })
  }
  
  const addToFavorite = (id)=>{
    const currentItem = recepie.find((item)=> item.id === id);
    setRecepieFavorite((prevItems)=>[...prevItems, currentItem])
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecepie(data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    if (search.trim()) fetchData();
    else setRecepie([]);
  }, [search]);

  return (
    <RecipieContext.Provider value={{ search, setSearch, recepie, setRecepie,
      addToBasket ,
      recipiebasket, 
      setRecepieBasket,
      addToFavorite,
      recipieFavorite ,
      setRecepieFavorite,
      incrementCountRecepie,
      decrementCountRecepie 
      }}>
      {children}
    </RecipieContext.Provider>
  );
};

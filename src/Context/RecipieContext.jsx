import { createContext, useState, useEffect } from "react";

export const RecipieContext = createContext({
  search: "",
  setSearch: () => {}, // Default no-op function
  recepie: [],
  setRecepie: () => {}, // Default no-op function
});

export const RecipesProvider = ({ children }) => {
  const [recepie, setRecepie] = useState([]);
  const [search, setSearch] = useState("chicken");

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;


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
    <RecipieContext.Provider value={{ search, setSearch, recepie, setRecepie }}>
      {children}
    </RecipieContext.Provider>
  );
};

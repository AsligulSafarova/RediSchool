import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [basket, setBasket] = useState([]);
  const [detail, setDetail] = useState({});
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const showDetails = (id)=>{
    const currenctCart = cart.find((item)=>item.id === id);

    if(currenctCart){
      setDetail(currenctCart)
    }
  }

  const addToFavorite = (id)=>{
    const item = cart.find((item)=> item.id === id);
    
    if(item){
      setFavorite((prevCart)=>[...prevCart, item])
    }}

    const incrementCount = (id) => {
      setBasket((prevBasket) =>
        prevBasket.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    };

    const decrementItem = (id)=>{
     setBasket(prevBasket=> prevBasket.map(elem=>
       elem.id === id?
        {...elem, count: elem.count -1}:elem
      ).filter(elem=>elem.count>0)
    
    )}
  
  const addTobasket = (id) => {
    const currentItem = cart.find((item) => item.id === id);
    if (currentItem) {
      setBasket((prevBasket) => {
        const existingItem = prevBasket.find((item) => item.id === id);
        if (existingItem) {
          return prevBasket.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
          );
        }
        return [...prevBasket, { ...currentItem, count: 1 }];
      });
    }
  };

  const url = "http://localhost:5000/recipes";

  const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
    
        const resp = await fetch(url);
    
        if (!resp.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await resp.json(); // Parse JSON response
        console.log("Fetched data:", data); // Log the actual response
           setCart(data)
      } catch (error) {
        console.error("Error while fetching data:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    useEffect(()=>{
      fetchData ()
    }, [])

  const value = { cart, setCart,
       loading, 
      setLoading, error, 
      setError, addToFavorite,
      favorite, setFavorite,  showDetails,detail,
       addTobasket, basket, incrementCount,decrementItem  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

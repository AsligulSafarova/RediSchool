import React, { useContext } from "react";
import style from "../../Styles/SearchRecepies.module.scss";
import { IoSearch } from "react-icons/io5";
import { RecipieContext } from "../../Context/RecipieContext";
import { useNavigate } from "react-router-dom";

export default function SearchRecepies() {
  const { search, setSearch } = useContext(RecipieContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      // Ensure there's a search term before navigating
      if (search.trim()) {
        navigate(`/addRecipies`);
      }
    }
  };

  return (
    <div className={style.input}>
   
      <p>
        <IoSearch
          style={{
            color: "black",
            fontSize: "1.5rem",
            marginTop: ".5rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
          onClick={handleSearch}
        />
      </p>
      <input
        type="text"
        placeholder="Search Recipes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch} // Trigger search on Enter
      />
    </div>
  );
}

import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogByName } from "../redux/action/actions";
import styles from "./searchBar.module.css"


export const SearchBar = ({ setCurrentPage }) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);
  
    function handleOnChange(e) {
      e.preventDefault();
      setName(e.target.value);
      setCurrentPage(1);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (name.length === 0) {
        return alert("Please write a name");
      } else {
        dispatch(fetchDogByName(name));
        setName("");
      }
    }
  
    return (
      <div style={{display: "inline-block"}}>
        <input className={styles.input}
          type="text"
          placeholder="Breed searcher"
          value={name}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          onChange={(e) => handleOnChange(e)}
        />
        &nbsp;
        <button className={styles.button7} type="submit" onClick={(e) => handleSubmit(e)}>
            Search
        </button>
      </div>
    );
  };
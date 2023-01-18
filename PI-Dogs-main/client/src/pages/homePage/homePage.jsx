import {
  fetchDogs,
  fetchTemperaments,
  filterByTemperaments,
  filterByName,
  filterByWeight,
} from "../../redux/action/actions"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DogsCards from "../../components/dogCards";
import { Paginado } from "../../components/dogPages";
import { SearchBar } from "../../components/searchBar";
import { Link } from "react-router-dom";
import styles from './home.module.css'



export const HomePage = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const dogsCardsPerPage = 8;
  const numberOfLastDog = currentPage * dogsCardsPerPage;
  const numberOfFirstDog = numberOfLastDog - dogsCardsPerPage;
  const currentDogs = allDogs.slice(numberOfFirstDog, numberOfLastDog);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    ;
    dispatch(fetchDogs());
    dispatch(fetchTemperaments());
    dispatch(filterByTemperaments());
  }, [dispatch]);


  const paginadoPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  const paginadoNext = () => {
    let lastPage = Math.ceil(allDogs.length / dogsCardsPerPage);
    if (currentPage < lastPage) setCurrentPage(currentPage + 1);
  }

  const temperaments = useSelector((state) => state.temperaments);
  const [temperament, setTemperamets] = useState("all");

  const handleSelectTemperament = (e) => {
    e.preventDefault();
    dispatch(filterByTemperaments(e.target.value));
    setTemperamets(e.target.value);
    setCurrentPage(1);
  };


  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchDogs());
    setFilterName("az");
    setFilterWeight("normal");
    setTemperamets("all");
    setCurrentPage(1);
  };


  const [filterWeight, setFilterWeight] = useState("");
  const handleSortWeight = (e) => {
    e.preventDefault();
    if (e.target.value === "normal") {
      dispatch(fetchDogs());
    }
    dispatch(filterByWeight(e.target.value));
    setFilterWeight(e.target.value);
    setCurrentPage(1);
    setFilterName("");
  };



  const [filterName, setFilterName] = useState("");
  const handleSortName = (e) => {
    e.preventDefault();
    dispatch(filterByName(e.target.value));
    setFilterName(e.target.value);
    setCurrentPage(1);
    setFilterWeight("");
  };

  return (
    <div>
      {currentDogs.length === 0 ? (<div style={{ marginTop: "20%", marginLeft: "50%" }} className={styles.loader}> </div>) :
        (<div className={styles.homeContainer} >
          <h1 className={styles.margin}></h1>
          <div className={styles.navBar}>
            <div className={styles.filters}>
              <div>
                <div>
                  <div>
                    <h1>Dogs App</h1>
                    <Link className={styles.button7} to="/createDog">Create dog</Link>
                    <span> Filter by temperament </span>
                    <select className={styles.input}
                      value={temperament}
                      onChange={(e) => handleSelectTemperament(e)}
                    >
                      <option value="all"> All </option>
                      {temperaments.map((temp, index) => (
                        <option onClick={(e) => handleClick(e)} key={index}>
                          {temp.name}
                        </option>
                      ))}
                    </select>

                    <span> Sort by weight </span>
                    <select className={styles.input} value={filterWeight} onChange={(e) => handleSortWeight(e)}>
                      <option value="normal"> ----- </option>
                      <option value="asc"> Lightest </option>
                      <option value="desc"> Heaviest</option>
                    </select>

                    <span> Sort by name </span>
                    <select className={styles.input} value={filterName} onChange={(e) => handleSortName(e)}>
                      <option value="az"> A - Z </option>
                      <option value="za"> Z - A</option>
                    </select>
                    <SearchBar setCurrentPage={setCurrentPage} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardList} >
            {
              currentDogs.map(e => (
                <DogsCards
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  temperament={e.temperament}
                  weight={e.weight}
                  img={e.img}
                />
              ))
            }

          </div>
          <div className={styles.center}>
            <Paginado
              dogsCardsPerPage={dogsCardsPerPage}
              allDogs={allDogs.length}
              paginado={paginado}
              paginadoPrev={paginadoPrev}
              paginadoNext={paginadoNext}
              currentPage={currentPage}
            />
          </div>
        </div>
        )}
    </div>
  )
}
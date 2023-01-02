import {
    fetchDogs,
    fetchTemperaments,
    filterByTemperaments
} from "../../redux/action/actions"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DogsCards from "../../components/dogCards";

export const HomePage = ()=>{
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
    
     useEffect(() => {;
         dispatch(fetchDogs());
         dispatch(fetchTemperaments());
         dispatch(filterByTemperaments());
       }, [dispatch]);



    return(
        <div className="mt-5">
            <h1>Breed list</h1>
            <hr/>
                    {
                        currentDogs.map(e=>(
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
    )
}
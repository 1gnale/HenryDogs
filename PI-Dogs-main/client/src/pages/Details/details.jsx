import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogById } from "../../redux/action/actions";
import DetailedDog from "../../components/dogDetail";
import styles from "../homePage/home.module.css"
const DetailPage = ()=>{

    const dispatch = useDispatch();
    const { id } = useParams();
    const [dog, setDog] = useState({});
  
  
    useEffect(() => {
      dispatch(fetchDogById(id)).then((e)=>{
        setDog(e.payload)
      });
      
      ;
    }, [dispatch, id]);
    return(
      <div>
        {Object.entries(dog).length === 0 ? (<div style={{marginTop: "20%", marginLeft: "50%"}} className={styles.loader}> </div>) :  (<DetailedDog name={dog[0].name}
        img={dog[0].img}
        temperament={dog[0].temperament}
        weight={dog[0].weight}
        height={dog[0].height}
        lifeSpan={dog[0].lifeSpan}/>)}
      </div>
    )
}


export default DetailPage
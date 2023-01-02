import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogById } from "../../redux/action/actions";
import DetailedDog from "../../components/dogDetail";
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

    console.log(dog)
    return(
      <div>
        {Object.entries(dog).length === 0 ? (<p>Wait a second</p>) :  (<DetailedDog name={dog[0].name}
        img={dog[0].img}
        temperament={dog[0].temperament}
        weight={dog[0].weight}
        height={dog[0].height}
        lifeSpan={dog[0].lifeSpan}/>)}
      </div>
    )
}


export default DetailPage
import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";


const DetailedDog= (props)=>{
    const {img, name, height, weight, lifeSpan, temperament} = props
    return(
        <div className="containter">
          <h1>Dog Details </h1>
          <Link to="/">HOME</Link>
          <div className="detail">
            <img className="image" src={img} alt={name} style={{height: 400}}/>
            <h3>{name}</h3>
            <h5>Height: {height} Cm</h5>
            <h5>Weight: {weight} Kg</h5>
            <h5>Life span: {lifeSpan}</h5>
            <h6>Temperaments: {temperament}</h6>
          </div>
            
        </div>
        )
}

export default DetailedDog
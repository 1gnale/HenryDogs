import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./styleDetail.module.css"


const DetailedDog = (props) => {
  const { img, name, height, weight, lifeSpan, temperament } = props
  return (
    <div className={style.background}>
    <div className={style.container}>
      <div className={style.tarjeta}>
        <div className={style.contenido}>
          <div className={style.ladoIzq}>
            <h1 className={style.titulo}>Dog Details</h1>
            <div className="detail">
              <h3>{name}</h3>
              <h5>Height: {height} Cm</h5>
              <h5>Weight: {weight} Kg</h5>
              <h5>Life span: {lifeSpan}</h5>
              <h6>Temperaments: {temperament}</h6>
              <Link className={style.button7} to="/home">HOME</Link>
            </div>
          </div>
          <div className={style.ladoDer}>
            <img src={img} alt={name} />
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default DetailedDog
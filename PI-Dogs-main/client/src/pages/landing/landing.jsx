import React from "react"
import { Link } from "react-router-dom"
import styles from "./landing.module.css"

export const Landing = ()=>{
    return(
        <div>
            <header className={styles.showcase}>
    <h1>Welcome To Dogs App</h1>
    <Link to="/home" style={{textDecoration: "none"}}><a href="#" className={styles.button}>Get started!</a></Link>
  </header>
  </div>
    )
}
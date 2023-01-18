import { Link } from "react-router-dom";
import styles from "./styleCards.module.css"

const DogsCards = (props) => {
    const {id, name, temperament,weight, img} = props
    return(
        
        


<div className={styles.card}  style={{ textAlign: "center" }} key={id}>
<Link to={`/dogs/${id}`} style={{textDecoration: "none", color: "#001213"}}>
    <div className={styles.cardImage}>
    <img src={img} alt={name}/>
    </div>
    <div className={styles.cardBody}>
        <h2>{name}</h2>
        <p><strong>Temperaments: </strong>{temperament}</p>
        <p>{weight} Kg</p>
        
    </div>
    </Link>



    </div>
    )
}

export default DogsCards
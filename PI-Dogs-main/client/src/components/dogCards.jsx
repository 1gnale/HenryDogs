import { Link } from "react-router-dom";

const DogsCards = (props) => {
    const {id, name, temperament,weight, img} = props
    return(
        <table className="table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Temperament</th>
            <th>Weight</th>
            <th>Image</th>
        </tr>
    </thead>
    <tbody>
        <tr key={id}>
                <td><Link to={`/dogs/${id}`}>{name}</Link></td>
                <td>{temperament}</td>
                <td>{weight + " Kg"}</td>
                <td>
                     <img
                     src = {img}
                     alt = {name}
                     style = {{height: 75}}
                     />
                </td>
        </tr>
        </tbody>
        </table>
    )
}

export default DogsCards
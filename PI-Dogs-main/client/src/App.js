import { Route } from "react-router-dom";
import DetailPage from "./pages/Details/details";
import { DogsForm } from "./pages/Form/form";
import { HomePage } from "./pages/homePage/homePage"
import { Landing } from "./pages/landing/landing";
import axios from "axios"

axios.defaults.baseURL = "https://localhost:3001"

const App = () => {
  return (
    <>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/dogs/:id" component={DetailPage}/>
      <Route exact path="/createDog" component={DogsForm}/>
    </>
  )
}

export default App;

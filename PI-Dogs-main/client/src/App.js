import { Route } from "react-router-dom";
import DetailPage from "./pages/Details/details";
import { HomePage } from "./pages/homePage/homePage"

const App = () => {
  return (
    <>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/dogs/:id" component={DetailPage}/>
    </>
  )
}

export default App;

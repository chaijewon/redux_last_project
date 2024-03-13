import {Provider} from "react-redux";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import store from "./store/store";
import {FoodList} from "./components/food/FoodList";
import {RecipeList} from "./components/recipe/RecipeList";
import {FoodFind} from "./components/food/FoodFind";
function App() {
  return (
      <Provider store={store}>
       <Router>
         <Header/>
         <div className={"container"}>
           <Routes>
             <Route exact path={"/"} element={<Home/>}/>
             <Route path={"/food/list"} element={<FoodList/>}/>
             <Route path={"/recipe/list"} element={<RecipeList/>}/>
             <Route path={"/food/find"} element={<FoodFind/>}/>
           </Routes>
         </div>
         <Footer/>
       </Router>
      </Provider>
  );
}

export default App;

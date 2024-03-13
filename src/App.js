import {Provider} from "react-redux";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import store from "./store/store";

function App() {
  return (
      <Provider store={store}>
       <Router>
         <Header/>
         <div className={"container"}>
           <Routes>
             <Route exact path={"/"} element={<Home/>}/>
           </Routes>
         </div>
         <Footer/>
       </Router>
      </Provider>
  );
}

export default App;

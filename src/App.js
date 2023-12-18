
import './App.css';


import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./Components/Header/Header";

import Home from "./Containers/Home/Home";
import Ingredient from "./Containers/Ingredient/Ingredient";
import Meal from "./Containers/Meal/Meal";
import Area from './Containers/Area/Area';

import Footer from "./Components/Footer/Footer";



function App() {

 


  return (

    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Meal" element={<Meal />} />
          <Route path="/Ingredient" element={<Ingredient />} />
          <Route path="/Area" element={<Area />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}




export default App;

import './App.css';

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import ByLetter from './Containers/ByLetter/ByLetter';
import Ingredient from "./Containers/Ingredient/Ingredient";
import Meal from "./Containers/Meal/Meal";
import Area from './Containers/Area/Area';
import Category from './Containers/Category/Category';
import Error404 from './Containers/Error404/Error404';
import Footer from "./Components/Footer/Footer";


function App() {
 
  return (

    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ByLetter/:letter" element={<ByLetter />} />
          <Route path="/Meal/:idMeal" element={<Meal />} />
          <Route path="/Ingredient/:ingredientId" element={<Ingredient />} />
          <Route path="/Area/:countryId" element={<Area />} />
          <Route path="/Category/:catId" element={<Category />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
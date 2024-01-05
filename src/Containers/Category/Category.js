import "./category.css";

import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

import MealThumb from "../../Components/MealThumb/MealThumb";



function Category() {


  const params = useParams();

  //console.log("params = ", params.catId)

  const { darkMode } = useContext(DarkModeContext);

  const [category, setCategory] = useState([])


  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catId}`
      );
      const responseApi = await response.json();
      setCategory(responseApi);
    };

    fetchCategory();
  }, [params.catId]);

  //console.log("les plats coorespondant à la categorie ", category)


  return (

    <div className={darkMode ? `Category-dark` : `Category-light`}>

      <section className="cardDisplay">

        <h1>Plats dans la catégorie "{params.catId}"</h1>

        <div className={darkMode ? `cardHolder-dark` : `cardHolder-light`}>

          {category.length === 0 ? (
            <div>rien</div>
          ) : (
            category.meals.map((items, i) => {
              return <div key={i} >{<MealThumb meal={items} />}</div>;
            })
          )}

        </div>

      </section>

    </div>
  );

}
export default Category;
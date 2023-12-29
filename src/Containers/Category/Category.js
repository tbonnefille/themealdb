import "./category.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MealThumb from "../../Components/MealThumb/MealThumb";



function Category() {


  const params = useParams();


  //console.log("params = ", params.catId)

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
  }, []);


  //console.log("les plats coorespondant à la categorie ", category)


  return (
    <div className="Category">


      <section className="cardDisplay">


        <h1>Plats dans la catégorie "{params.catId}"</h1>


        <div className="cardHolder">

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
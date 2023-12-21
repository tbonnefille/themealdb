import "./byLetter.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MealThumb from "../../Components/MealThumb/MealThumb";

function ByLetter() {


  const params = useParams();


  //console.log("params = ", params.letter)

  const [byLetterMeal, setByLetterMeal] = useState([])


  useEffect(() => {
    const fetchByLetterMeal = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${params.letter}`
      );
      const responseApi = await response.json();
      setByLetterMeal(responseApi);
    };

    fetchByLetterMeal();
  }, []);


  console.log("les plats coorespondant à la lettre sont ", byLetterMeal.meals)






  return (
    <div className="ByLetter">


<h1>Plats commençants par la lettre "{params.letter}"</h1>



      <section >


        <div className="cardHolder">

          {byLetterMeal.length === 0 ? (
            <div>rien</div>
          ) : (
            byLetterMeal.meals.map((meal) => {
              return <div>{<MealThumb meal={meal} />}</div>;
            })
          )}

        </div>










      </section>

    </div>
  );

}
export default ByLetter;
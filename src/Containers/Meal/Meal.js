import "./meal.css";

import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { Link } from "react-router-dom";


function Meal() {


  const params = useParams();

  //console.log("params = ", params.idMeal)

  const { darkMode } = useContext(DarkModeContext);

  const [meal, setMeal] = useState([])

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
      );
      const responseApi = await response.json();
      setMeal(responseApi);
    };

    fetchMeal();
  }, [params.idMeal]);

  //console.log("le plat est ", meal.meals)

  const repas = meal.meals;


  return (

    <div className={darkMode ? `Meal-dark` : `Meal-light`}>


      {!repas ? (
        <div>rien</div>
      ) : (
        repas.map((items, i) => {


          const ingredientsArr = [];

          for (let i = 1; i <= 20; i++) {
            if (items[`strIngredient${i}`]) {
              ingredientsArr.push(`${items[`strIngredient${i}`]}`);

            } else {
              break;
            }
          }

          //  console.log("les ingredients sont:", ingredientsArr)

          const qteMesures = [];

          for (let i = 1; i <= 20; i++) {
            if (items[`strIngredient${i}`]) {
              qteMesures.push(`${items[`strIngredient${i}`]} - ${items[`strMeasure${i}`]}`);
            } else {
              break;
            }
          }

          //  console.log("les qte & mesures sont :", qteMesures)


          return <div key={i}>

            <h1>{items.strMeal}</h1>

            <div className="mealInfoBox">

              <div className="mealInfo">

                <section className="mealInfoTxt">

                  <h2>Informations</h2>

                  <Link to={`/area/${items.strArea}`}><div className={darkMode ? `mealInfoSlab-dark` : `mealInfoSlab-light`}> style : <div className="areaBtt">{items.strArea}</div></div></Link>

                  <Link to={`/category/${items.strCategory}`}><div className={darkMode ? `mealInfoSlab-dark` : `mealInfoSlab-light`}> catégorie : <div className="catBtt">{items.strCategory}</div></div></Link>

                  <Link to={`${items.strYoutube}`}><div className={darkMode ? `mealInfoSlab-dark` : `mealInfoSlab-light`}><div className="skoBtt">lien youtube</div></div></Link>

                  <Link to={`${items.strSource}`}><div className={darkMode ? `mealInfoSlab-dark` : `mealInfoSlab-light`}><div className="skoBtt">source</div></div></Link>

                  <div> Tags :  {items.strTags} </div>

                </section>


                <section className="bigMeal">

                  <img src={items.strMealThumb} className={darkMode ? `bigImg-dark` : `bigImg-light`} alt={items.strMeal} />

                </section>

              </div>

              <div className="mealTxt">

                <section className="recette">

                  <div className="mealInstructions">

                    <h2>Préparation</h2>
                    {items.strInstructions}

                  </div>

                  <div className="mesures">

                    <h2>Mesures</h2>

                    <div className="mqt">

                      {qteMesures.length === 0 ? (
                        <div>rien</div>
                      ) : (
                        qteMesures.map((qtm, i) => {
                          return <div key={i}>  {qtm}  </div>

                        })
                      )}

                    </div>

                  </div>

                </section>

              </div>

            </div>


            <section className="cardDisplay">

              <h2>Ingrédients</h2>

              <div className={darkMode ? `cardHolder-dark` : `cardHolder-light`}>


                {ingredientsArr.length === 0 ? (
                  <div>rien</div>
                ) : (
                  ingredientsArr.map((ing, i) => {
                    return (
                      <Link key={i} to={`/ingredient/${ing}`}>

                        <div className={darkMode ? `MealThumb-dark` : `MealThumb-light`}>
                          <img src={`https://www.themealdb.com/images/ingredients/${ing}.png`} className="cardImg" alt={ing} />
                          <div>{ing}</div>
                        </div>

                      </Link>)


                  })
                )}


              </div>

            </section>


          </div>;


        })
      )}


    </div>

  );

}
export default Meal;
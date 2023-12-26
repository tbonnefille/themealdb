import "./meal.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Meal() {


  const params = useParams();


  //console.log("params = ", params.idMeal)


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
  }, []);


  //console.log("le plat est ", meal.meals)

  const repas = meal.meals;


  return (

    <div className="Meal">


      {!repas ? (
        <div>rien</div>
      ) : (
        repas.map((items) => {
                

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



          return <div>

            <h1>{items.strMeal}</h1>

            <div className="mealInfoBox">

              <div className="mealInfo">

                <section className="mealInfoTxt">

                  <h2>Informations</h2>

                  <Link to={`/area/${items.strArea}`}><div className="mealInfoSlab">style : <div className="areaBtt">{items.strArea}  </div></div></Link>

                  <Link to={`/category/${items.strCategory}`}> <div className="mealInfoSlab"> catégorie : <div className="catBtt">  {items.strCategory} </div></div></Link>

                  <Link to={`${items.strYoutube}`}><div className="mealInfoSlab"><div className="tealBtt">lien youtube</div></div></Link>

                  <Link to={`${items.strSource}`}><div className="mealInfoSlab"><div className="tealBtt">source</div></div></Link>

                  <div> Tags :  {items.strTags} </div>

                </section>



                <section className="bigMeal">

                  <img src={items.strMealThumb} className="bigImg" alt={items.strMeal} />

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

                    {qteMesures.length === 0 ? (
                      <div>rien</div>
                    ) : (
                      qteMesures.map((qtm) => {
                        return <div>  {qtm}  </div>

                      })
                    )}

                  </div>


                </section>

              </div>


            </div>


            <section className="ingredients">


              <h2>Ingrédients</h2>

              <div className="cardHolder">


                {ingredientsArr.length === 0 ? (
                  <div>rien</div>
                ) : (
                  ingredientsArr.map((ing) => {
                    return <Link to={`/ingredient/${ing}`}>


                      <div className="MealThumb">
                        <img src={`https://www.themealdb.com/images/ingredients/${ing}.png`} className="cardImg" alt={ing} />
                        <div>{ing}</div>
                      </div>


                    </Link>


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
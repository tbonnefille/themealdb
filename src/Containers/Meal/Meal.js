import "./meal.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Meal() {


  const params = useParams();
  



  console.log("params = ", params.idMeal)


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


  console.log("le plat est ", meal.meals)

  const repas = meal.meals;

/* faire un tableau des 20 ingredients
boucle qui verifie si la valeur esy non nulle/utiliser filter?
mettre les ingredients à valeur non-nulle dans un nouveau tableau
déployer le nouveau tableau dans la section des ingredients








*/

  return (

    <div className="Meal">


      {!repas ? (
        <div>rien</div>
      ) : (
        repas.map((items) => {

          const ingredientId = items.strIngredient1;

          return <div>

<h1>{items.strMeal}</h1>

            <section className="mealInfo">

             <h2>Informations</h2>

              <div>  style :    {items.strArea} </div>

              <div> catégorie :    {items.strCategory}   </div>

              <div> Tags :  {items.strTags} </div>

              <div> lien youtube :  {items.strYoutube} </div>

              <div>  source :    {items.strSource} </div>

            </section>

            <section>

              <div className="bigMeal">


                <img src={items.strMealThumb} className="bigImg" alt={items.strMeal} />



              </div>


            </section>

            <section className="recette">




              <div className="mealInstructions">
                
                <h2>Préparation</h2>
                 {items.strInstructions}
              
              </div>

              <div className="mesures">

                <h2>Mesures</h2>

                <div>{items.strIngredient1}  {items.strMeasure1}</div>
                <div>{items.strIngredient2}  {items.strMeasure2}</div>
                <div>{items.strIngredient3}  {items.strMeasure3}</div>
                <div>{items.strIngredient4}  {items.strMeasure4}</div>
                <div>{items.strIngredient5}  {items.strMeasure5}</div>
                <div>{items.strIngredient6}  {items.strMeasure6}</div>
                <div>{items.strIngredient7}  {items.strMeasure7}</div>
                <div>{items.strIngredient8}  {items.strMeasure8}</div>
                <div>{items.strIngredient9}  {items.strMeasure9}</div>
                <div>{items.strIngredient10}  {items.strMeasure10}</div>
                <div>{items.strIngredient11}  {items.strMeasure11}</div>
                <div>{items.strIngredient12}  {items.strMeasure12}</div>
                <div>{items.strIngredient13}  {items.strMeasure13}</div>
                <div>{items.strIngredient14}  {items.strMeasure14}</div>
                <div>{items.strIngredient15}  {items.strMeasure15}</div>
                <div>{items.strIngredient16}  {items.strMeasure16}</div>
                <div>{items.strIngredient17}  {items.strMeasure17}</div>
                <div>{items.strIngredient18}  {items.strMeasure18}</div>
                <div>{items.strIngredient19}  {items.strMeasure19}</div>
                <div>{items.strIngredient20}  {items.strMeasure20}</div>


              </div>



            </section>



            <section className="ingredients">

              <h2>Ingrédients</h2>

              <div className="cardHolder">





              <Link to={`/ingredient/${ingredientId}`}>



                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>



                </Link>








                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient2}.png`} className="cardImg" alt={items.strIngredient2} />
                  <div>{items.strIngredient2}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient3}.png`} className="cardImg" alt={items.strIngredient3} />
                  <div>{items.strIngredient3}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient4}.png`} className="cardImg" alt={items.strIngredient4} />
                  <div>{items.strIngredient4}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient5}.png`} className="cardImg" alt={items.strIngredient5} />
                  <div>{items.strIngredient5}</div>
                </div>


                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>


                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>


                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient1}</div>
                </div>

                <div className="MealThumb">
                  <img src={`https://www.themealdb.com/images/ingredients/${items.strIngredient20}.png`} className="cardImg" alt={items.strIngredient1} />
                  <div>{items.strIngredient20}</div>
                </div>

              </div>



            </section>











          </div>;




        })
      )}



    </div>



  );

}
export default Meal;
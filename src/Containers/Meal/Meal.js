import "./meal.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


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












  return (

    <div className="Meal">


      {!repas ? (
        <div>rien</div>
      ) : (
        repas.map((items) => {

          return <div>


            <section className="mealInfo">

              <div> {items.strMeal} </div>

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




              <div> {items.strInstructions}</div>

              <div className="mesures">

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
            

              <div>{items.strIngredient1}</div>
              <div>{items.strIngredient2}</div>
              <div>{items.strIngredient3}</div>
              <div>{items.strIngredient4}</div>
              <div>{items.strIngredient5}</div>
              <div>{items.strIngredient6}</div>
              <div>{items.strIngredient7}</div>
              <div>{items.strIngredient8}</div>
              <div>{items.strIngredient9}</div>
              <div>{items.strIngredient10}</div>
              <div>{items.strIngredient11}</div>
              <div>{items.strIngredient12}</div>
              <div>{items.strIngredient13}</div>
              <div>{items.strIngredient14}</div>
              <div>{items.strIngredient15}</div>
              <div>{items.strIngredient16}</div>
              <div>{items.strIngredient17}</div>
              <div>{items.strIngredient18}</div>
              <div>{items.strIngredient19}</div>
              <div>{items.strIngredient20}</div>


            </section>











          </div>;




        })
      )}



    </div>



  );

}
export default Meal;
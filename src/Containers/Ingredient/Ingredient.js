import "./ingredient.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MealThumb from "../../Components/MealThumb/MealThumb";


function Ingredient() {


  const params = useParams();


  console.log("params = ", params.ingredientId)

  const [ingredient, setIngredient] = useState([])


  useEffect(() => {
    const fetchIngredient = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.ingredientId}`
      );
      const responseApi = await response.json();
      setIngredient(responseApi);
    };

    fetchIngredient();
  }, []);


  console.log("les plats contenant l'ingredient sont ", ingredient.meals)




  return (
    <div className="Meal">

      <h1>{params.ingredientId}</h1>

      <div className="plat">

        <div className="ingredientsButt">

          <div className="bigMeal">


            <img src={`https://www.themealdb.com/images/ingredients/${params.ingredientId}.png`} className="bigImg" alt={params.ingredientId} />


          </div>

        </div>

        <section className="recette">

          <h2>Description</h2>

          <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, </div>

        </section>


      </div>

      <section className="ingredients">

        <h2>Plats contenant l'ingrédient "{params.ingredientId}"</h2>

        <div className="cardHolder">

          {!ingredient.meals ? (
            <div>rien</div>
          ) : (
            ingredient.meals.map((items) => {
              return <div>{<MealThumb meal={items} />}</div>;
            })
          )}

        </div>






      </section>

    </div>
  );

}
export default Ingredient;
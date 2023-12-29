import "./ingredient.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MealThumb from "../../Components/MealThumb/MealThumb";


function Ingredient() {


  const params = useParams();

  //console.log("params = ", params.ingredientId)

  const ingr = params.ingredientId;

  //console.log("ingr = " ,ingr)


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



  const [ingredientList, setIngredientList] = useState([])


  useEffect(() => {
    const fetchIngredientList = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );
      const responseApi = await response.json();
      setIngredientList(responseApi);
    };

    fetchIngredientList();
  }, []);


  // console.log("la liste des ingrédients ", ingredientList.meals)


  const myArr = ingredientList.meals;


  const myCurrentIngredient = `${ingr}`;


  if (!myArr) {


    console.log(" le tableau est undefined")

  }

  else {

    //console.log("le tableau existe")


    var myfilteredList = ingredientList.meals.filter((el) => {
      return el.strIngredient === myCurrentIngredient;
    });


    //console.log("myfilteredList",myfilteredList)


    // bien vérifier que la longueur du tableau est non nulle
    var myDescription = myfilteredList[0].strDescription;
    // console.log("myDescription", myDescription);

  }

  let descriptionTxt = "";

  if (!myDescription) {

    descriptionTxt = "-BIENTOT DISPONIBLE-";

  } else {

    descriptionTxt = `${myDescription}`;
  }



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

          <div>{descriptionTxt}</div>


        </section>


      </div>

      <section className="cardDisplay">

        <h2>Plats contenant l'ingrédient "{params.ingredientId}"</h2>

        <div className="cardHolder">

          {!ingredient.meals ? (
            <div>rien</div>
          ) : (
            ingredient.meals.map((items, i) => {
              return <div key={i}>{<MealThumb meal={items} />}</div>;
            })
          )}

        </div>






      </section>

    </div>
  );

}
export default Ingredient;
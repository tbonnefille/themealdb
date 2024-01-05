import "./ingredient.css";

import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

import MealThumb from "../../Components/MealThumb/MealThumb";


function Ingredient() {


  const params = useParams();

  //console.log("params = ", params.ingredientId)

  const { darkMode } = useContext(DarkModeContext);

  /*
  Ici, on fait en sorte que les noms de l'ingrédient commencent TOUJOURS par une majuscule,
  sinon myfilteredList ne trouvera jamais l'élément recherché
  */

  const mySentence = `${params.ingredientId}`;
  const words = mySentence.split(" ");

  const res =

    words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

  //console.log("le résultat est :", res)


  const [ingredient, setIngredient] = useState([])

  useEffect(() => {
    const fetchIngredient = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${res}`
      );
      const responseApi = await response.json();
      setIngredient(responseApi);
    };

    fetchIngredient();
  }, [res]);


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

  const myCurrentIngredient = `${res}`;

  let myDescription = "";


  if (!myArr || myArr.length === 0) {


    //rien à faire

  }


  else {


    const myfilteredList = ingredientList.meals.filter((el) => {
      return el.strIngredient === myCurrentIngredient;
    });


    // console.log("myfilteredList",myfilteredList)


    // bien vérifier que la longueur du tableau est non nulle
    myDescription = myfilteredList[0].strDescription;
    // console.log("myDescription", myDescription);


  }


  let descriptionTxt = "";

  if (!myDescription) {

    descriptionTxt = "- BIENTOT DISPONIBLE -";

  } else {

    descriptionTxt = `${myDescription}`;
  }



  return (

    <div className={darkMode ? `Meal-dark` : `Meal-light`}>

      <h1>{res}</h1>

      <div className="plat">

        <div className="ingredientsButt">

          <div className="bigMeal">

            <img src={`https://www.themealdb.com/images/ingredients/${params.ingredientId}.png`} className={darkMode ? `bigImg-dark` : `bigImg-light`} alt={params.ingredientId} />

          </div>

        </div>

        <section className="recette">

          <h2>Description</h2>

          <div>{descriptionTxt}</div>

        </section>


      </div>

      <div className="cardDisplay">

        <h2>Plats contenant l'ingrédient "{res}"</h2>

        <div className={darkMode ? `cardHolder-dark` : `cardHolder-light`}>

          {!ingredient.meals ? (
            <div>rien</div>
          ) : (
            ingredient.meals.map((items, i) => {
              return <div key={i}>{<MealThumb meal={items} />}</div>;
            })
          )}

        </div>


      </div>

    </div>
  );

}
export default Ingredient;
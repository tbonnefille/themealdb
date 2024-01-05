import "./mealThumb.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";


function MealThumb(props) {

    const idMeal = props.meal.idMeal;

    const { darkMode } = useContext(DarkModeContext);

   
    return (


        <Link to={`/meal/${idMeal}`}>

            <div className={darkMode ? `MealThumb-dark` : `MealThumb-light`}>

                <img src={props.meal.strMealThumb} className="cardImg" alt={props.meal.strMeal} />
                <div className="cardTxt">{props.meal.strMeal}</div>

            </div>

        </Link>

    );

}
export default MealThumb;
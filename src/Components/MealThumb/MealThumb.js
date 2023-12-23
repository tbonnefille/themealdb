import "./mealThumb.css";

import { Link } from "react-router-dom";


function MealThumb(props) {

    const idMeal = props.meal.idMeal;

    return (


        <Link to={`/meal/${idMeal}`}>



            <div className="MealThumb">



                <img src={props.meal.strMealThumb} className="cardImg" alt={props.meal.strMeal} />

                <div className="cardTxt">{props.meal.strMeal}</div>


            </div>


        </Link>


    );

}
export default MealThumb;
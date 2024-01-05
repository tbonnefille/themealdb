import "./categoryThumb.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";


function CategoryThumb(props) {

    const { darkMode } = useContext(DarkModeContext);

    const catId = props.category.strCategory;


    return (


        <Link to={`/category/${catId}`}>


            <div className={darkMode ? `MealThumb-dark` : `MealThumb-light`}>

                <img src={props.category.strCategoryThumb} className="cardImg" alt="" />

                <div className="cardTxtCat">{props.category.strCategory}</div>

            </div>


        </Link>


    );

}
export default CategoryThumb;
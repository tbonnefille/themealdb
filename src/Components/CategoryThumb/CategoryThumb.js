import "./categoryThumb.css";

import { Link } from "react-router-dom";


function CategoryThumb(props) {



    const catId = props.category.strCategory;


    return (


        <Link to={`/category/${catId}`}>




        <div className="MealThumb">

            <img src={props.category.strCategoryThumb} className="cardImg" alt="" />

            <div className="cardTxtCat">{props.category.strCategory}</div>

        </div>






        </Link>





    );

}
export default CategoryThumb;
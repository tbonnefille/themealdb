import "./nav.css";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className="Nav">

            
            <Link className="menu" to="/meal">Meal</Link>
           
            <Link className="menu" to="/ingredient">Ingredient</Link>
            <Link className="menu" to="/Area">Area</Link>
            <Link className="menu" to="/Category">Category</Link>
            <Link className="menu" to="/">Error404</Link>

        </div>
    );

}
export default Nav;
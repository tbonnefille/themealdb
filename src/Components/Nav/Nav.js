import "./nav.css";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className="Nav">

            <Link className="menu" to="/">Home</Link>
            <Link className="menu" to="/meal">Meal</Link>
           
            <Link className="menu" to="/ingredient">Ingredient</Link>
            <Link className="menu" to="/Area">Area</Link>


        </div>
    );

}
export default Nav;
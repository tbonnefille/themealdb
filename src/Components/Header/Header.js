import "./header.css";

import { Link } from "react-router-dom";


function Header() {

  
    return (


        <div className="Header">

            <div className="logo">

                <div>KOUIZINE</div>


            </div>


            <div>THE Meal DATABASE</div>

            

            <div className="searchEngine">

                <Link to="/"><div className="homeBtt">Home</div></Link>

                <input placceholder="search bar">



                </input>


               

                <div>bouton mode nuit</div>

            </div>

        </div>
    );

}
export default Header;
import "./header.css";

import { Link } from "react-router-dom";


function Header() {


    return (


        <div className="Header">

            <div className="logo">

                <div>KOUIZINE</div>


            </div>






            <div className="searchEngine">



            <input
            type="text"
            id="search"
            placeholder="Search for meals or keywords"
          />

            </div>

            <div className="headerBtt">

                <Link to="/"><div className="homeBtt">Home</div></Link>

                <div>bouton mode nuit</div>

            </div>

        </div>
    );

}
export default Header;
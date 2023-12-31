import "./header.css";

import { Link } from "react-router-dom";

import SearchEngine from "../SearchEngine/SearchEngine";
import Lightswitch from "../Lightswitch/Lightswitch";

function Header() {


    return (

        <div className="Header">

            <div className="logo">

                <div>KOUIZINE</div>

            </div>


           <SearchEngine />


            <div className="headerBtt">

                <Link to="/"><div className="homeBtt">Home</div></Link>

               

                <Lightswitch />

            </div>

        </div>
    );

}
export default Header;
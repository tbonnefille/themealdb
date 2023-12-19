import "./header.css";

import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";



function Header() {




    // <Link to={`/ByLetter/${letter}`}>A</Link>


    //let letter = "a";


    return (


        <div className="Header">

            <div className="logo">

                <div>KOUIZINE</div>


            </div>



            <div className="letterSearch">
                <div>THE Meal DATABASE</div>

                <Nav />

                <div>choix par lettre</div>

                <div className="alpha">

                <Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/b">B</Link>
                /<Link to="/ByLetter/c">C</Link>
                /<Link to="/ByLetter/d">D</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>
                /<Link to="/ByLetter/a">A</Link>

                </div>



            </div>


            <div className="searchEngine">

                <Link className="menu" to="/home">Home</Link>

                <input placceholder="search bar"


                >

                </input>

                <div>random</div>

            </div>

        </div>
    );

}
export default Header;
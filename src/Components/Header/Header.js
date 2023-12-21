import "./header.css";

import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";



function Header() {






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
                /<Link to="/ByLetter/e">E</Link>
                /<Link to="/ByLetter/f">F</Link>
                /<Link to="/ByLetter/g">G</Link>
                /<Link to="/ByLetter/h">H</Link>
                /<Link to="/ByLetter/i">I</Link>
                /<Link to="/ByLetter/j">J</Link>
                /<Link to="/ByLetter/k">K</Link>
                /<Link to="/ByLetter/l">L</Link>
                /<Link to="/ByLetter/m">M</Link>
                /<Link to="/ByLetter/n">N</Link>
                /<Link to="/ByLetter/o">O</Link>
                /<Link to="/ByLetter/p">P</Link>
                /<Link to="/ByLetter/q">Q</Link>
                /<Link to="/ByLetter/r">R</Link>
                /<Link to="/ByLetter/s">S</Link>
                /<Link to="/ByLetter/t">T</Link>
                /<Link to="/ByLetter/u">U</Link>
                /<Link to="/ByLetter/v">V</Link>
                /<Link to="/ByLetter/w">W</Link>
                /<Link to="/ByLetter/x">X</Link>
                /<Link to="/ByLetter/y">Y</Link>
                /<Link to="/ByLetter/z">Z</Link>
               

                </div>



            </div>


            <div className="searchEngine">

                <Link className="menu" to="/">Home</Link>

                <input placceholder="search bar"


                >

                </input>

                <div>random</div>
                <div>bouton mode nuit</div>

            </div>

        </div>
    );

}
export default Header;
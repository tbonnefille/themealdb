import "./letterSearch.css";

import { Link } from "react-router-dom";


function LetterSearch() {

    
    return (

        <div className="LetterSearch">

                <h2>choix par lettre</h2>

                <div className="alpha">

                    <Link to="/ByLetter/a"><div className="letter">A</div></Link>
                    <Link to="/ByLetter/b"><div className="letter">B</div></Link>
                    <Link to="/ByLetter/c"><div className="letter">C</div></Link>
                    <Link to="/ByLetter/d"><div className="letter">D</div></Link>
                    <Link to="/ByLetter/e"><div className="letter">E</div></Link>
                    <Link to="/ByLetter/f"><div className="letter">F</div></Link>
                    <Link to="/ByLetter/g"><div className="letter">G</div></Link>
                    <Link to="/ByLetter/h"><div className="letter">H</div></Link>
                    <Link to="/ByLetter/i"><div className="letter">I</div></Link>
                    <Link to="/ByLetter/j"><div className="letter">J</div></Link>
                    <Link to="/ByLetter/k"><div className="letter">K</div></Link>
                    <Link to="/ByLetter/l"><div className="letter">L</div></Link>
                    <Link to="/ByLetter/m"><div className="letter">M</div></Link>
                    <Link to="/ByLetter/n"><div className="letter">N</div></Link>
                    <Link to="/ByLetter/o"><div className="letter">O</div></Link>
                    <Link to="/ByLetter/p"><div className="letter">P</div></Link>
                    <Link to="/ByLetter/q"><div className="letter">Q</div></Link>
                    <Link to="/ByLetter/r"><div className="letter">R</div></Link>
                    <Link to="/ByLetter/s"><div className="letter">S</div></Link>
                    <Link to="/ByLetter/t"><div className="letter">T</div></Link>
                    <Link to="/ByLetter/u"><div className="letter">U</div></Link>
                    <Link to="/ByLetter/v"><div className="letter">V</div></Link>
                    <Link to="/ByLetter/w"><div className="letter">W</div></Link>
                    <Link to="/ByLetter/x"><div className="letter">X</div></Link>
                    <Link to="/ByLetter/y"><div className="letter">Y</div></Link>
                    <Link to="/ByLetter/z"><div className="letter">Z</div></Link>


                </div>

            </div>




    );

}
export default LetterSearch;
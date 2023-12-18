import "./header.css";

import Nav from "../Nav/Nav";



function Header() {

    return (


        <div className="Header">

            <div>THE Meal DATABASE</div>

            <Nav />

          <div>choix par lettre</div> 

          <input placceholder ="search bar"
         
          
          >
          
          </input>

           <div>choix par catégorie</div>
           <div> choix par région</div>


        </div>
    );

}
export default Header;
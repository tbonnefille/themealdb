import "./error404.css";

import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { Link } from "react-router-dom";



function Error404() {

  const { darkMode } = useContext(DarkModeContext);

  return (

    <div className={darkMode ? `Error404-dark` : `Error404-light`}>

      <div className="errorNb">404</div>

      <div className="errorTxt">Oops! Cette page n'exite pas!</div>

      <Link to="/">
        <div className={darkMode ? `errorMessage-dark` : `errorMessage-light`}>- Retourner à la page d'acceuil -</div>
      </Link>




    </div>
  );

}
export default Error404;
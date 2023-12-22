import "./error404.css";

import { Link } from "react-router-dom";



function Error404() {


  return (
    <div className="Error404">

      <div className="errorNb">404</div>

      <div className="errorTxt">Oops! Cette page n'exite pas!</div>

      <Link to="/">Retourner à la page d'acceuil</Link>




    </div>
  );

}
export default Error404;
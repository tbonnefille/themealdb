import "./footer.css";

import css3 from '../../Assets/css3.png';
import html5 from '../../Assets/html5.png';
import javascript from '../../Assets/javascript.png';
import react from '../../Assets/react.png'

import Modal from "../Modal/Modal";

import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className="Footer">



      <div className="about">

        <div className="aboutTitle">About</div>

        <Modal />
        
       <Link to="https://www.themealdb.com/api.php"><div className="projectLinks"> - A.P.I. originale themealdb - </div></Link>

      </div>

      <div className="git">

       <Link to= "https://github.com/tbonnefille/themealdb"> <div className="projectLinks">  - projet disponible ici - </div></Link>
        <div> tbonnefille ©2023 - 2024</div>

      </div>

      <div className="powered">

        <div>powered by :</div>


        <div className="icons">

          <div><img src={html5} alt="logo html5" className="techIcon" title="html5" /></div>
          <div><img src={css3} alt="logo css3" className="techIcon" title="css3" /></div>
          <div><img src={javascript} alt="logo javascript" className="techIcon" title="javascript" /></div>
          <div><img src={react} alt="logo react" className="techIcon" title="react" /></div>

        </div>

      </div>

    </div>
  );

}
export default Footer;
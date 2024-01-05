import './lightswitch.css';

import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

import sun from '../../Assets/sun.png';
import moon from '../../Assets/moon.png';


function Lightswitch() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const handleClick = () => {

        toggleDarkMode();

    }

    /*
    
                <img src={darkMode ?
    
                    `${ moon }` : `${ sun }`  }  alt="lightswitch"
    
                     />
    
    
    
    */

    return (

        <div className="lightswitch"
        
        onClick={handleClick}
        
        >




            {darkMode ? <img src={sun} alt="soleil" className="dmIcon" /> : <img src={moon} alt="lune" className="dmIcon" />}






        </div>



    )

}

export default Lightswitch
import "./country.css";

import { Link } from "react-router-dom";


function Country(props) {


    const countrytId = props.country.strArea;

    return (

        <Link to={`/area/${countrytId}`}>


            <div className="Country">


                <div className="cardTxt">{countrytId}</div>

            </div>


        </Link>



    );

}
export default Country;
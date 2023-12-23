import "./randomMeal.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function RandomMeal() {

    const [random, setRandom] = useState([])

    useEffect(() => {
  
      const fetchRandom = async () => {
        const response = await fetch(
          " https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const responseApi = await response.json();
        setRandom(responseApi);
      };
  
      fetchRandom();
  
    }, []);


    
    return (

        <div className="RandomMeal">

{!random.meals ? (
          <div>rien</div>
        ) : (
          random.meals.map((items) => {





            return <Link to={`/meal/${items.idMeal}`}><div className="homeBtt">choisir un plat au hasard</div></Link>



            

          })
        )}

            </div>




    );

}
export default RandomMeal;
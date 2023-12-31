import "./area.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MealThumb from "../../Components/MealThumb/MealThumb";

function Area() {

  const params = useParams();

  //console.log("params = ", params.countryId)

  const [area, setArea] = useState([])


  useEffect(() => {
    const fetchArea = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.countryId}`
      );
      const responseApi = await response.json();
      setArea(responseApi);
    };

    fetchArea();
  }, []);


  //console.log("les plats coorespondant au pays ", area.meals)


  return (
    <div className="Area">


      <section className="cardDisplay">


        <h1>Plats dans le style "{params.countryId}"</h1>


        <div className="cardHolder">

          {!area.meals ? (
            <div>rien</div>
          ) : (
            area.meals.map((items, i) => {
              return <div key={i}>{<MealThumb meal={items} />}</div>;
            })
          )}

        </div>

      </section>

    </div>
  );

}
export default Area;
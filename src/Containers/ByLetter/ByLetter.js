import "./byLetter.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



function ByLetter() {


    const params = useParams();
    

console.log("params = ", params.letter)

const [byLetterMeal, setByLetterMeal] = useState([])


useEffect(() => {
    const fetchByLetterMeal = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${params.letter}`
      );
      const responseApi = await response.json();
      setByLetterMeal(responseApi);
    };

    fetchByLetterMeal();
  }, []);


  console.log("les plats coorespondant à la lettre sont ", byLetterMeal)






  return (
    <div className="Area">

      

      <section className="area">
      
      </section>

    </div>
  );

}
export default ByLetter;
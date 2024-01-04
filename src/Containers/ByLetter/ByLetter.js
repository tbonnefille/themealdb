import "./byLetter.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MealThumb from "../../Components/MealThumb/MealThumb";


function ByLetter() {


  const params = useParams();

  //console.log("params = ", params.letter)


  //si l'url contient plusieures lettres(input direct)

  const [keyLetter, setKeyLetter] = useState();

  const navigate = useNavigate();

  useEffect(() => {

    if (params.letter.length > 1) {

      navigate("/*");

    } else {

      setKeyLetter(params.letter);
    }

  }, [navigate, params.letter]);

  // console.log("keyLetter = ", keyLetter);

  if (!keyLetter) {

    setKeyLetter(params.letter[0]);

  }

  const [byLetterMeal, setByLetterMeal] = useState([]);

  useEffect(() => {
    const fetchByLetterMeal = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${keyLetter}`
      );
      const responseApi = await response.json();
      setByLetterMeal(responseApi);
    };

    fetchByLetterMeal();
  }, [keyLetter]);

  // console.log("les plats coorespondant à la lettre sont ", byLetterMeal.meals)


  //prévoir le cas où il n'y a pas de résultat au fetch

  let result = "";

  if (!byLetterMeal.meals) {

    result = "- AUCUN RESULTAT -";

  } else {

    result = byLetterMeal.meals.map((meal, i) => {
      return <div key={i}>{<MealThumb meal={meal} />}</div>;
    });
  }


  return (
    <div className="ByLetter">

      <h1>Plats commençants par la lettre "{keyLetter}"</h1>

      <section className="cardDisplay">

        <div className="cardHolder">{result}</div>

      </section>

    </div>
  );

}
export default ByLetter;
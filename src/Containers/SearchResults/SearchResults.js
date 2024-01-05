import "./searchResults.css";

import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

import MealThumb from "../../Components/MealThumb/MealThumb";



function SearchResults() {

    const params = useParams();

    // console.log("params = ", params.searchId)

    const { darkMode } = useContext(DarkModeContext);

    const [searchResults, setSearchResults] = useState([])


    useEffect(() => {
        const fetchSearchResults = async () => {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchId}`
            );
            const responseApi = await response.json();
            setSearchResults(responseApi);
        };

        fetchSearchResults();
    }, [params.searchId]);


    // console.log("les résultats de recherche ", searchResults.meals)


    return (

        <div className={darkMode ? `SearchResults-dark` : `SearchResults-light`}>


            <section className="cardDisplay" >

                <h1>Résultats de recherche pour le terme "{params.searchId}"</h1>

                <div className={darkMode ? `cardHolder-dark` : `cardHolder-light`}>

                    {!searchResults.meals ? (
                        <div>- AUCUN RESULTAT -</div>
                    ) : (
                        searchResults.meals.map((items, i) => {
                            return <div key={i}>{<MealThumb meal={items} />}</div>;
                        })
                    )}


                </div>

            </section>

        </div>
    );

}
export default SearchResults;
import "./searchResults.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MealThumb from "../../Components/MealThumb/MealThumb";



function SearchResults() {

    const params = useParams();


    console.log("params = ", params.searchId)


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
    }, []);


    // console.log("les résultats de recherche ", searchResults.meals)


    return (
        <div className="SearchResults">


            <section >

                <h1>Résultats de recherche pour le terme "{params.searchId}"</h1>

                <div className="cardHolder">

                    {!searchResults.meals ? (
                        <div>rien</div>
                    ) : (
                        searchResults.meals.map((items) => {
                            return <div>{<MealThumb meal={items} />}</div>;
                        })
                    )}


                </div>

            </section>

        </div>
    );

}
export default SearchResults;
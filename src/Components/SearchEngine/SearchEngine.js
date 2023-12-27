import "./searchEngine.css";

import { Link } from "react-router-dom";

/*

1. récupérer la valeur de l'input

2.Mettre la valeur dans le lien vers la page de résultat de recherche

3. Dans la page résultat, récupérer la valzur avec usepararms

4. fetch avec www.themealdb.com/api/json/v1/1/search.php?s=useparams

5; .map les résultats du fetch dans une section


*/

function SearchEngine() {


    let searchId = "ar";

    //let searchId = search.value;




    return (

        <div className="SearchEngine">

            <div>faire une recherche </div>


            <input
                type="text"
                id="search"
                placeholder="Search for meals or keywords"


            />

            <Link to={`/searcResults/${searchId}`}>

                <button> lien vers résultats de recherche </button>

            </Link>





            <Link to={`/searchResults/${searchId}`}>

                <button> ex </button>

            </Link>



        </div>




    );

}
export default SearchEngine;
import "./searchEngine.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function SearchEngine() {




    function refreshPage() {


        setInputText("");
        //window.location.reload(false);

    }



    const [inputText, setInputText] = useState("");


    let searchId = `${inputText}`;


    return (



        <div className="SearchEngine">

            <div className="searchTitle">faire une recherche </div>

            <div className="searchBar">

                <input
                    type="text"
                    id="search"
                    placeholder="Search for meals or keywords"
                    value={inputText}
                    onChange={(event) => {
                        setInputText(event.target.value);
                    }}
                ></input>


                <Link to={`/searchResults/${searchId}`}>


                    <div className="searchBtt">


                        <div onClick={refreshPage}>Q</div>



                    </div>


                </Link>

            </div>

        </div>




    );

}
export default SearchEngine;
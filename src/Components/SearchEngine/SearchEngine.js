import "./searchEngine.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loupe from '../../Assets/loupe.png';


function SearchEngine() {


    function refreshPage() {

        setInputText("");

    }

    const [inputText, setInputText] = useState("");

    const searchId = `${inputText}`;

    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            navigate(`/SearchResults/${searchId}`);
            setInputText("");

        }
    };


    return (


        <div className="SearchEngine">

            <div className="searchTitle">faire une recherche </div>

            <div className="searchBar">

                <input
                    type="text"
                    id="search"
                    placeholder="rechercher un plat ou un mot-clé"
                    value={inputText}
                    onChange={(event) => {
                        setInputText(event.target.value);

                    }}
                    onKeyDown={handleKeyDown}

                ></input>

                <Link to={`/searchResults/${searchId}`}>

                    <div className="searchBtt">

                        <div onClick={refreshPage}>
                            <div><img src={loupe} alt="icone loupe" className="searchIcon" title="rechercher" /></div>
                        </div>

                    </div>

                </Link>

            </div>

        </div>


    );

}
export default SearchEngine;
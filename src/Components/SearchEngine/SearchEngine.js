import "./searchEngine.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import loupe from '../../Assets/loupe.png';


function SearchEngine() {




    function refreshPage() {


        setInputText("");
     //   window.location.reload(false);

    }



    const [inputText, setInputText] = useState("");


    const searchId = `${inputText}`;


    return (



        <div className="SearchEngine">

            <div className="searchTitle">faire une recherche </div>

            <div className="searchBar">

                <input
                    type="text"
                    id="search"
                    placeholder="rechercher un plat"
                    value={inputText}
                    onChange={(event) => {
                        setInputText(event.target.value);
                    }}
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
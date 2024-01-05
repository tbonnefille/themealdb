import "./home.css";

import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

import LetterSearch from "../../Components/LetterSearch/LetterSearch";
import CategoryThumb from "../../Components/CategoryThumb/CategoryThumb";
import Country from "../../Components/Country/Country";
import RandomMeal from "../../Components/RandomMeal/RandomMeal";


function Home() {

  const { darkMode } = useContext(DarkModeContext);

  const [category, setCategory] = useState([])
  const [area, setArea] = useState([])


  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const responseApi = await response.json();
      setCategory(responseApi);
    };

    fetchCategory();
  }, []);

  // console.log("les catégories sont", category.categories)



  useEffect(() => {
    const fetchArea = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const responseApi = await response.json();
      setArea(responseApi);
    };

    fetchArea();
  }, []);

  //console.log("les régions sont", area.meals)


  return (

    <div className={darkMode ? `Home-dark` : `Home-light`}>

      <h1>BIENVENUE</h1>

      <div>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
      </div>

      <RandomMeal />


      <section>

        <h2>choix par categorie</h2>

        <div className={darkMode ? `cardHolder-dark` : `cardHolder-light`}>

          {!category.categories ? (
            <div>rien</div>
          ) : (
            category.categories.map((category, i) => {
              return <div key={i}>{<CategoryThumb category={category} />}</div>;

            })
          )}

        </div>

      </section>


      <section>

        <h2>choix par style</h2>

        <div className={darkMode ? `region-dark` : `region-light`}>

          {area.length === 0 ? (
            <div>rien</div>
          ) : (
            area.meals.map((country, i) => {

              return <div key={i}>{<Country country={country} />}</div>;

            })
          )}

        </div>

      </section>

      <LetterSearch />



    </div>
  );

}
export default Home;
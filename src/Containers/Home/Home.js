import "./home.css";

import { useState, useEffect } from "react";

import LetterSearch from "../../Components/LetterSearch/LetterSearch";
import CategoryThumb from "../../Components/CategoryThumb/CategoryThumb";
import Country from "../../Components/Country/Country";
import RandomMeal from "../../Components/RandomMeal/RandomMeal";

import { Link } from "react-router-dom";


function Home() {


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

  console.log("les catégories sont", category.categories)



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

  console.log("les régions sont", area.meals)


  












  return (
    <div className="Home">

      <h1>WELCOME</h1>



      <div>

       






      </div>




      <div>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
      </div>


      
<RandomMeal />


      <section>
        <h2>choix par categorie</h2>

        <div className="cardHolder">

          {category.length === 0 ? (
            <div>rien</div>
          ) : (
            category.categories.map((category) => {
              return <div>{<CategoryThumb category={category} />}</div>;

            })
          )}

        </div>

      </section>


      <section>

        <h2>choix par style</h2>

        <div className="region">

          {area.length === 0 ? (
            <div>rien</div>
          ) : (
            area.meals.map((country) => {

              return <div>{<Country country={country} />}</div>;

            })
          )}

        </div>

      </section>

      <LetterSearch />



    </div>
  );

}
export default Home;
import "./ingredient.css";





function Ingredient() {


  return (
    <div className="Meal">

      <div className="plat">

        <div className="ingredientsButt">

          <div className="bigMeal"></div>
          <div>prévoir des  buttons  </div>

        </div>
        
        <section className="recette">

          description de l'ingredient ici
        </section>


      </div>

      <section className="ingredients">
        plats avec même ingredient ici
      </section>

    </div>
  );

}
export default Ingredient;
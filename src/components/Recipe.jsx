export const Recipe = (props) => {
  const { strMeal, strMealThumb, strInstructions } = props;
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content" style={{ flexGrow: 1 }}>
        <span className="card-title">{strMeal}</span>
        <p>{strInstructions}</p>
      </div>
      <div className="card-action"></div>
    </div>
  );
};

// idMeal: "52893"
// strArea: "British"
// strCategory: "Dessert"
// strIngredient1: "Plain Flour"
// strIngredient2: "Caster Sugar"
// strIngredient3: "Butter"
// strIngredient4: "Braeburn Apples"
// strIngredient5: "Butter"
// strIngredient6: "Demerara Sugar"
// strIngredient7: "Blackberrys"
// strIngredient8: "Cinnamon"
// strIngredient9: "Ice Cream"
// strInstructions: "Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.\r\nMeanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.\r\nTo serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream."
// strMeal: "Apple & Blackberry Crumble"
// strMealThumb: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
// strMeasure1: "120g"
// strMeasure2: "60g"
// strMeasure3: "60g"
// strMeasure4: "300g"
// strMeasure5: "30g"
// strMeasure6: "30g"
// strMeasure7: "120g"
// strMeasure8: "¼ teaspoon"
// strMeasure9: "to serve"
// strSource: "https://www.bbcgoodfood.com/recipes/778642/apple-and-blackberry-crumble"
// strTags: "Pudding"
// strYoutube: "https://www.youtube.com/watch?v=4vhcOwVBDO4"

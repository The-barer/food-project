import { MealItem } from "./MealItem";

const MealsList = (params) => {
  const { meals = [] } = params;

  return (
    <div className="itemsGrid">
      {meals.map((el) => (
        <MealItem key={el.idMeal} {...el} />
      ))}
    </div>
  );
};

export { MealsList };

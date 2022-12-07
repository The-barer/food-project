import { Link } from "react-router-dom";
import { projectName } from '../config'

export const MealItem = (props) => {
  const { idMeal, strMeal, strMealThumb } = props;
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content" style={{ flexGrow: 1 }}>
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link className="btn" to={`/${projectName}/meal/${idMeal}`}>
          Посмотреть
        </Link>
      </div>
    </div>
  );
};

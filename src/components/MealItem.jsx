import { Link, useNavigate } from "react-router-dom";

export const MealItem = (props) => {
  const { idMeal, strMeal, strMealThumb } = props;
  const navigate = useNavigate()
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} style={{cursor:'pointer'}} onClick={()=>navigate(`/meal/${idMeal}`)}/>
      </div>
      <div className="card-content" style={{ flexGrow: 1 }}>
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link className="btn" to={`/meal/${idMeal}`} name={{strMeal}}>
          Посмотреть
        </Link>
      </div>
    </div>
  );
};

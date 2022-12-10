import { Link, useNavigate } from "react-router-dom";

export const CategoryItem = (props) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props;
  const navigate = useNavigate()
  
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      <div className="card-image" >
        <img src={strCategoryThumb} alt={strCategory} style={{cursor:'pointer'}} onClick={()=>navigate(`/category/${strCategory}`)}/>
      </div>
      <div className="card-content" style={{ flexGrow: 1 }}>
        <span className="card-title" style={{fontWeight:'bold'}}>{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 80)}...</p>
      </div>
      <div className="card-action">
        <Link className="btn" to={`/category/${strCategory}`}>
          Посмотреть
        </Link>
      </div>
    </div>
  );
};

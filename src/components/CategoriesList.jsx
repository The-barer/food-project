import { CategoryItem } from "./CategoryItem";

const CategoriesList = (params) => {
  const { categories = [] } = params;

  return (
    <div className="itemsGrid">
      {categories.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};

export { CategoriesList };

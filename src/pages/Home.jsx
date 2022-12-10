import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoriesList } from "../components/CategoriesList";
import { Search } from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
    const [categories, setCategories] = useState([]);
    const [filtredCatalog, setFiltredCatalog] = useState([]);
    const { pathname, search } = useLocation();

    const navigator = useNavigate();

    const handelSearch = (str, type = "") => {
        if (str.length === 0) {
            setFiltredCatalog(categories);
            navigator({ pathname });
        } else {
            if (type === "all") {
                setFiltredCatalog(
                    categories.filter(
                        (item) =>
                            item.strCategoryDescription
                                .toLowerCase()
                                .includes(str.toLowerCase()) ||
                            item.strCategory.toLowerCase().includes(str.toLowerCase())
                    )
                );
            } else {
                setFiltredCatalog(
                    categories.filter((item) =>
                        item.strCategory.toLowerCase().includes(str.toLowerCase())
                    )
                );
            }
            navigator({
                pathname,
                search: `search=${str}`,
            });
        }
    };
    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data.categories);
            setFiltredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split("=")[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <>
            <Search cb={handelSearch} />
            <h3> Food categories </h3>
            {!categories.length ? (
                <Preloader />
            ) : (
                <CategoriesList categories={filtredCatalog} />
            )}
        </>
    );
};

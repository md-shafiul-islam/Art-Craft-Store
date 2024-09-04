import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CategoryContext } from "../../Context/CategoryProvider";

const CategoryLinkItems = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <React.Fragment>
      {categories?.map((category) => {
        return (
          <li
            key={`category-${category?._id}`}
            className="text-black text-nowrap w-44 my-1"
          >
            <NavLink to={`/categories/${category?.name}`}>
              {category?.name}
            </NavLink>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default CategoryLinkItems;

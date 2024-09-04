import React, { createContext, useEffect, useState } from "react";

import { isEmptyOrNull } from "../utils/helper";
import { getAllCategory } from "../utils/loader-api";
import axios from "axios";

export const CategoryContext = createContext({});

const CategoryProvider = ({ children, ...props }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/categories`)
      .then((categoryResp) => {
        if (!isEmptyOrNull(categoryResp.data)) {
          if (!isEmptyOrNull(categoryResp.data.response)) {
            setCategories(categoryResp.data.response);
          }
        }
      })
      .catch((error) => {
        console.log("Category Error ", error);
      });
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

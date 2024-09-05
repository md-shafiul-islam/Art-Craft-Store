import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";
import AddProductForm from "../Components/Product/AddProductForm";
import { AuthContext } from "../Context/AuthProvider";

const AddProductPage = () => {
  const categoryResp = useLoaderData();

  const [categories, setCategories] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!isEmptyOrNull(categoryResp)) {
      if (!isEmptyOrNull(categoryResp.data)) {
        if (categoryResp.data.status) {
          setCategories(categoryResp.data.response);
        }
      }
    }
  }, [categoryResp]);

  const initValues = {
    userName: user.displayName,
    userEmail: user.email,
  };

  return (
    <React.Fragment>
      <AddProductForm
        key="add-art-craft-item"
        initValues={initValues}
        categories={categories}
      />
    </React.Fragment>
  );
};

export default AddProductPage;

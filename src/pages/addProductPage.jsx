import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utils/helper";
import AddProductForm from "../Components/Product/AddProductForm";

const AddProductPage = () => {
  const categoryResp = useLoaderData();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("Category Resp, ", categoryResp);
    if (!isEmptyOrNull(categoryResp)) {
      if (!isEmptyOrNull(categoryResp.data)) {
        if (categoryResp.data.status) {
          setCategories(categoryResp.data.response);
        }
      }
    }
  }, [categoryResp]);

  const initValues = {};

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

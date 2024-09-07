import axios from "axios";
import { REQUEST_HEADER } from "./type";

export const getAllCategory = async () => {
  try {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/categories`, {
      headers: REQUEST_HEADER,
    });

    return resp;
  } catch (error) {
    console.log("Category response error ", error);
    return [];
  }
};

export const getAllItemsUsingQuery = async (
  stock = false,
  customizable = false,
  rating = null
) => {
  try {
    const resp = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/products/query?stock=${stock}&customizable=${customizable}&rating=${rating}`,
      { headers: REQUEST_HEADER }
    );

    return resp;
  } catch (error) {
    console.log("Product response error ", error);
    return [];
  }
};

export const getCraftItemsById = async (id) => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${id}`,
      { headers: REQUEST_HEADER }
    );

    return resp.data;
  } catch (error) {
    console.log("Product response error ", error);
    return [];
  }
};

export const getCraftItemsByCat = async (cat) => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/categories/${cat}`,
      { headers: REQUEST_HEADER }
    );

    return resp.data;
  } catch (error) {
    console.log("Product response error ", error);
    return [];
  }
};

export const getCraftItems = async () => {
  try {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
      headers: REQUEST_HEADER,
    });

    return resp.data;
  } catch (error) {
    console.log("Product response error ", error);
    return [];
  }
};

export const addUserUsingAPI = async (user) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/users`,
      user,
      { headers: REQUEST_HEADER }
    );
  } catch (error) {
    console.log("User Add failed Error", error);
  }
};

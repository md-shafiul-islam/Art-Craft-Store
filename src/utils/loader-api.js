import axios from "axios";

export const getAllCategory = async () => {
  try {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);

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
      }/products/query?stock=${stock}&customizable=${customizable}&rating=${rating}`
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
      `${import.meta.env.VITE_API_URL}/products/${id}`
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
      `${import.meta.env.VITE_API_URL}/products/categories/${cat}`
    );

    return resp.data;
  } catch (error) {
    console.log("Product response error ", error);
    return [];
  }
};

export const getCraftItems = async () => {
  try {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/products`);

    return resp.data;
  } catch (error) {
    console.log("Product response error ", error);
    return [];
  }
};

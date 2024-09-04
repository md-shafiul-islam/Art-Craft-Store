import axios from "axios";
import { isEmptyOrNull } from "./helper";

export const getAllCategory = async () => {
  try {
    const resp = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);

    return resp;
  } catch (error) {
    console.log("Category response error ", error);
    return [];
  }
};



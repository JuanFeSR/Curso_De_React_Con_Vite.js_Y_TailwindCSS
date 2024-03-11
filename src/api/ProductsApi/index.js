import axios from "axios";

const apiUrl = "https://fakestoreapi.com";

const getProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

const getCategories = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error getting categories:", error);
    throw error;
  }
};

export default { getProducts, getCategories };

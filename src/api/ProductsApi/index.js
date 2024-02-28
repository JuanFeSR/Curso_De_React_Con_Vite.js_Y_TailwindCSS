import axios from "axios";

const url = "https://fakestoreapi.com/products";

const getProducts = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default { getProducts };
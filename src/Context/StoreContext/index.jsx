import { createContext, useContext, useEffect, useMemo, useState } from "react";
import productServices from "../../api/ProductsApi/index";
import PropTypes from "prop-types";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [counter, setCounter] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await productServices.getProducts();
    setProducts(response);
  };

  const toggleProductDetail = () =>
    setIsProductDetailOpen(!isProductDetailOpen);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      counter,
      setCounter,
      isProductDetailOpen,
      setIsProductDetailOpen,
      toggleProductDetail,
    }),
    [
      products,
      setProducts,
      counter,
      setCounter,
      isProductDetailOpen,
      setIsProductDetailOpen,
    ]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore debe ser usado dentro de un StoreProvider");
  }
  return context;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

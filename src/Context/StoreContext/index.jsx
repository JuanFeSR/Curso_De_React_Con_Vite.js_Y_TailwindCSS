import { createContext, useContext, useEffect, useMemo, useState } from "react";
import productServices from "../../api/ProductsApi/index";
import PropTypes from "prop-types";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Products from API
  const [products, setProducts] = useState(null);
  /* console.log("API info", products); */
  // Increment quantity - Shopping Cart
  const [counter, setCounter] = useState(0);
  // Add selected products to cart - Shoping Cart
  const [selectedProducts, setSelectedProducts] = useState([]);
  // Order - Shoping Cart
  const [order, setOrder] = useState([]);
  // Open/ Close - Product Detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  // Open/ Close - Checkout Side Menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  // Show product - Product Detail
  const [productToShow, setProductToShow] = useState({});
  // Search products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log("searchByTitlesearchByTitle", searchByTitle);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await productServices.getProducts();
    setProducts(response);
  };

  const toggleProductDetail = () =>
    setIsProductDetailOpen(!isProductDetailOpen);

  const toggleCheckoutSideMenu = () =>
    setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      counter,
      setCounter,
      isProductDetailOpen,
      setIsProductDetailOpen,
      toggleProductDetail,
      productToShow,
      setProductToShow,
      selectedProducts,
      setSelectedProducts,
      isCheckoutSideMenuOpen,
      setIsCheckoutSideMenuOpen,
      toggleCheckoutSideMenu,
      order,
      setOrder,
      searchByTitle,
      setSearchByTitle,
    }),
    [
      products,
      setProducts,
      counter,
      setCounter,
      isProductDetailOpen,
      setIsProductDetailOpen,
      productToShow,
      setProductToShow,
      selectedProducts,
      setSelectedProducts,
      isCheckoutSideMenuOpen,
      setIsCheckoutSideMenuOpen,
      order,
      setOrder,
      searchByTitle,
      setSearchByTitle,
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

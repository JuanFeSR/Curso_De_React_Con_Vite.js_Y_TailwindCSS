import { createContext, useContext, useEffect, useMemo, useState } from "react";
import productServices from "../../api/ProductsApi/index";
import PropTypes from "prop-types";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Products from API
  const [products, setProducts] = useState(null);
  // console.log("API info", products);
  // Categories from API
  const [categories, setCategories] = useState([]);
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
  // Filtered products
  const [filteredProducts, setFilteredProducts] = useState(null);
  // Search products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  // Search products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = async () => {
    const response = await productServices.getProducts();
    setProducts(response);
  };

  const getCategories = async () => {
    const response = await productServices.getCategories();
    setCategories(response);
  };

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products?.filter(
      (product) =>
        product.category.toLowerCase() === searchByCategory.toLowerCase()
    );
  };

  const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredProductsByTitle(products, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory).filter(
        (product) =>
          product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return products;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredProducts(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          products,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredProducts(
        filterBy("BY_TITLE", products, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredProducts(
        filterBy("BY_CATEGORY", products, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredProducts(
        filterBy(null, products, searchByTitle, searchByCategory)
      );
  }, [products, searchByTitle, searchByCategory]);

  const toggleProductDetail = () =>
    setIsProductDetailOpen(!isProductDetailOpen);

  const toggleCheckoutSideMenu = () =>
    setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);

  const value = useMemo(
    () => ({
      products,
      setProducts,
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
      filteredProducts,
      setFilteredProducts,
      searchByCategory,
      setSearchByCategory,
      categories,
      setCategories,
    }),
    [
      products,
      setProducts,
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
      filteredProducts,
      setFilteredProducts,
      searchByCategory,
      setSearchByCategory,
      categories,
      setCategories,
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

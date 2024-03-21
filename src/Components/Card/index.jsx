import { FaPlus, FaCheckCircle, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { useStoreContext } from "../../Context/StoreContext";

const Card = ({ product }) => {
  const {
    toggleProductDetail,
    setProductToShow,
    selectedProducts,
    setSelectedProducts,
    setIsCheckoutSideMenuOpen,
  } = useStoreContext();

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);

  const showProduct = (productDetail) => {
    toggleProductDetail();
    setProductToShow(productDetail);
  };

  const addProductsToCart = (e, productData) => {
    setSelectedProducts([...selectedProducts, productData]);
    openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart =
      selectedProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <FaCheckCircle className="flex justify-center items-center absolute top-0 right-0  bg-green-500 text-white w-6 h-6 rounded-full m-2 p-1" />
      );
    } else {
      return (
        <FaPlus
          className=" flex justify-center items-center absolute top-0 right-0  bg-green-500 text-white rounded-full w-6 h-6  m-2 p-1"
          onClick={(e) => {
            e.stopPropagation();
            addProductsToCart(e, product);
          }}
        />
      );
    }
  };

  return (
    <div
      className="flex flex-col justify-between bg-gray-200 cursor-pointer w-60 h-[450px] p-2 rounded-lg shadow-md hover:drop-shadow-xl"
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-full h-3/4 bg-white rounded-lg">
        <span className="absolute bottom-0 left-0 bg-gray-200/60 rounded-lg text-black text-xs m-2 px-2 py-0.5">
          {product.category}
        </span>
        <img
          className="w-full h-full object-contain"
          src={product.image}
          alt={product.title}
        ></img>
        {renderIcon(product.id)}
      </figure>
      <h2 className="text-lg font-semibold mb-2 line-clamp-2">
        {product.title}
      </h2>
      <div className="flex-grow flex justify-between items-end">
        <div className="text-sm font-normal">
          <span className="flex gap-2 items-center">
            <FaStar className="text-yellow-400" /> {product.rating.rate}
          </span>
          <span>{product.rating.count} reviews</span>
        </div>
        <div className="text-lg font-medium">${product.price}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;

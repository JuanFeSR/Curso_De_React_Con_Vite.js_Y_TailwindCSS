import { FaPlus, FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import { useStoreContext } from "../../Context/StoreContext";

const Card = ({ product }) => {
  const {
    toggleProductDetail,
    setProductToShow,
    selectedProducts,
    setSelectedProducts,
    toggleCheckoutSideMenu,
  } = useStoreContext();

  const showProduct = (productDetail) => {
    toggleProductDetail();
    setProductToShow(productDetail);
  };

  const addProductsToCart = (e, productData) => {
    setSelectedProducts([...selectedProducts, productData]);
    toggleCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart =
      selectedProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <FaCheckCircle className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" />
      );
    } else {
      return (
        <FaPlus
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
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
      className="bg-white cursor-pointer w-56 h-60 rounded-lg "
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {product.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.image}
          alt={product.title}
        ></img>
        {renderIcon(product.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">${product.price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;

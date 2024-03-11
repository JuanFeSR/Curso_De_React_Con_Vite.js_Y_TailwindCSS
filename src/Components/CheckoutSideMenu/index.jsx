import { IoMdCloseCircleOutline } from "react-icons/io";
import { useStoreContext } from "../../Context/StoreContext";
import "./styles.css";
import OrderCards from "../OrderCards";
import { totalPrice } from "../../Utilities";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    toggleCheckoutSideMenu,
    selectedProducts,
    setSelectedProducts,
    order,
    setOrder,
    setSearchByTitle,
  } = useStoreContext();

  const handleDelete = (id) => {
    const filteredProducts = selectedProducts.filter(
      (product) => product.id != id
    );
    setSelectedProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "",
      products: selectedProducts,
      totalProducts: selectedProducts.length,
      totalPrice: totalPrice(selectedProducts),
    };
    setOrder([...order, orderToAdd]);
    setSelectedProducts([]);
    toggleCheckoutSideMenu();
    setSearchByTitle(null);
  };

  return (
    <aside
      className={` ${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkoutSideMenu  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">My Order</h2>
        <IoMdCloseCircleOutline
          className="cursor-pointer"
          onClick={toggleCheckoutSideMenu}
          size={24}
        />
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {selectedProducts.map((product) => (
          <OrderCards
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(selectedProducts)}
          </span>
        </p>
        {selectedProducts.length > 0 ? (
          <Link to={"/MyOrders/last"}>
            <button
              className="w-full bg-black py-3 text-white rounded-lg"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </Link>
        ) : (
          <button
            className="w-full bg-gray-400 py-3 text-white rounded-lg cursor-not-allowed"
            disabled
          >
            Checkout
          </button>
        )}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;

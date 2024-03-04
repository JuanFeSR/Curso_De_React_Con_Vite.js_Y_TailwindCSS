import { IoMdCloseCircleOutline } from "react-icons/io";
import { useStoreContext } from "../../Context/StoreContext";
import "./styles.css";
import OrderCards from "../OrderCards";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    toggleCheckoutSideMenu,
    selectedProducts,
    setSelectedProducts,
  } = useStoreContext();

  const handleDelete = (id) => {
    const filteredProducts = selectedProducts.filter(
      (product) => product.id != id
    );
    setSelectedProducts(filteredProducts);
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
      <div className="px-6 overflow-y-scroll">
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
    </aside>
  );
};

export default CheckoutSideMenu;

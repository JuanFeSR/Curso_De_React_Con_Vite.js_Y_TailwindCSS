import { IoMdCloseCircleOutline } from "react-icons/io";
import { useStoreContext } from "../../Context/StoreContext";
import "./styles.css";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, toggleCheckoutSideMenu } = useStoreContext();

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
    </aside>
  );
};

export default CheckoutSideMenu;

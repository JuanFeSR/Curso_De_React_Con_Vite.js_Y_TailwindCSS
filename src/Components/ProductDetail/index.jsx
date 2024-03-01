import { IoMdCloseCircleOutline } from "react-icons/io";
import "./styles.css";
import { useStoreContext } from "../../Context/StoreContext";

const ProductDetail = () => {
  const { isProductDetailOpen, toggleProductDetail } = useStoreContext();

  return (
    <aside
      className={` ${
        isProductDetailOpen ? "flex" : "hidden"
      } productDetail  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={toggleProductDetail}>
          <IoMdCloseCircleOutline size={24} />
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;

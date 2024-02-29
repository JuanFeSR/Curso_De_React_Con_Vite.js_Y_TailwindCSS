import { IoMdCloseCircleOutline } from "react-icons/io";
import "./styles.css";

const ProductDetail = () => {
  return (
    <aside className="productDetail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">Detail</h2>
        <IoMdCloseCircleOutline size={24} />
      </div>
    </aside>
  );
};

export default ProductDetail;

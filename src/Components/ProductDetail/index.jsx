import { IoMdCloseCircleOutline } from "react-icons/io";
import { useStoreContext } from "../../Context/StoreContext";
import "./styles.css";

const ProductDetail = () => {
  const { isProductDetailOpen, toggleProductDetail, productToShow } =
    useStoreContext();

  return (
    <aside
      className={` ${
        isProductDetailOpen ? "flex" : "hidden"
      } productDetail  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6 ">
        <h2 className="font-medium text-xl">Detail</h2>
        <IoMdCloseCircleOutline
          className="cursor-pointer"
          onClick={toggleProductDetail}
          size={24}
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-medium text-2xl my-2">
          ${productToShow.price}
        </span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;

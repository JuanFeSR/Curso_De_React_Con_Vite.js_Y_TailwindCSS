import Layout from "../../Components/Layout/index";
import OrderCards from "../../Components/OrderCards";
import { useStoreContext } from "../../Context/StoreContext";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function MyOrder() {
  const { order } = useStoreContext();

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-6">
        <Link to={"/MyOrders"} className="absolute left-0">
          <FaChevronCircleLeft className="cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80 ">
        {order?.slice(-1)[0].products.map((product) => (
          <OrderCards
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;

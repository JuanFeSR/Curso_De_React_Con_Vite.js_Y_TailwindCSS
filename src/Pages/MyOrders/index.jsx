import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/index";
import MyOrdersCard from "../../Components/MyOrdersCard";
import { useStoreContext } from "../../Context/StoreContext";

function MyOrders() {
  const { order } = useStoreContext();

  return (
    <Layout className="bg-slate-500">
      <div className="flex w-80 items-center justify-center relative ">
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => {
        <Link key={index} to={`MyOrders/${order.id}`}>
          <MyOrdersCard
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
          ;
        </Link>;
      })}
    </Layout>
  );
}

export default MyOrders;

import Layout from "../../Components/Layout/index";
import OrderCards from "../../Components/OrderCards";
import { useStoreContext } from "../../Context/StoreContext";

function MyOrder() {
  const { order } = useStoreContext();

  return (
    <Layout className="bg-slate-500">
      MyOrder
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

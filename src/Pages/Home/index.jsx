import Layout from "../../Components/Layout/index";
import Card from "../../Components/Card/index";
import { useStoreContext } from "../../Context/StoreContext";

function Home() {
  const { products } = useStoreContext();

  return (
    <Layout className="bg-slate-500">
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;

import Layout from "../../Components/Layout/index";
import Card from "../../Components/Card/index";
import { useStoreContext } from "../../Context/StoreContext";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const { products, setSearchByTitle } = useStoreContext();

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">Exlusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;

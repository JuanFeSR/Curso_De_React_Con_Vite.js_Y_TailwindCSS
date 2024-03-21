import Layout from "../../Components/Layout/index";
import Card from "../../Components/Card/index";
import { useStoreContext } from "../../Context/StoreContext";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const { setSearchByTitle, filteredProducts } = useStoreContext();

  const renderView = () => {
    if (filteredProducts?.length > 0) {
      return filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ));
    } else {
      return <p>¡No Results Found!</p>;
    }
  };

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center my-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />

      <div className="grid gap-4 grid-cols-4 items-stretch w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;

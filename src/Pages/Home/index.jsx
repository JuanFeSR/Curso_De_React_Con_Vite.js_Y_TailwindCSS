import Layout from "../../Components/Layout/index";
import Card from "../../Components/Card/index";
import { useStoreContext } from "../../Context/StoreContext";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const { products, searchByTitle, setSearchByTitle, filteredProducts } =
    useStoreContext();

  const renderView = () => {
    const productsToRender =
      searchByTitle?.length > 0 ? filteredProducts : products;

    if (productsToRender?.length > 0) {
      return productsToRender.map((product) => (
        <Card key={product.id} product={product} />
      ));
    } else {
      return <p>¡No Results Found!</p>;
    }
  };

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
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;

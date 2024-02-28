import Layout from "../../Components/Layout/index";
import Card from "../../Components/Card/index";
import { useEffect, useState } from "react";
import productServices from "../../api/ProductsApi/index";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await productServices.getProducts();
    setProducts(response);
  };

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

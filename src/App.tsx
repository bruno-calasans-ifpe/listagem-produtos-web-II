import Loader from "./components/Loader";
import ProductError from "./components/ProductError";
import useProducts from "./hooks/useProducts";

function App() {
  const { products, loading, error } = useProducts();

  if (error)
    return (
      <ProductError
        title="Algo deu errado!"
        text="Não foi possível carregar os produtos"
      />
    );

  if (loading) return <Loader />;

  return <div>App</div>;
}

export default App;

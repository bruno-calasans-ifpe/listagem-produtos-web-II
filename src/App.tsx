import Loader from "./components/Loader";
import ProductCard from "./components/ProductCard";
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

  return (
    <main className="flex flex-col flex-1">
      <section className="flex items-center justify-center">
        <header className="text-5xl">Produtos</header>
      </section>
      <section className="p-10">
        <h1>Mostrando 10 produtos de 50</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {products.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

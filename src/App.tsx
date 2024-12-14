import useProducts from "./hooks/useProducts";

function App() {
  const { products, loading, error } = useProducts();

  if (error)
    return (
      <div className="flex justify-center items-center gap-1">
        <p>Algo deu errado</p>
      </div>
    );

  if (loading)
    return (
      <div className="flex justify-center items-center gap-1">
        <p>Carregando produtos...</p>
        <div className="animate-pulse w-8 h-8 rounded-full bg-indigo-600"></div>
      </div>
    );

  return <div>App</div>;
}

export default App;

import ProductsList from "./components/ProductsList";

function App() {
  return (
    <main className="flex flex-col flex-1 gap-2 lg:max-w-[1200px] m-auto mt-6 h-full">
      <section className="flex flex-col  ml-16">
        <header className="text-5xl font-bold">Produtos</header>
        <p className="text-xl text-stone-700">Mostrando 100 produtos</p>
      </section>
      <section className="flex flex-col gap-3 px-16 flex-1">
        <ProductsList />
      </section>
    </main>
  );
}

export default App;

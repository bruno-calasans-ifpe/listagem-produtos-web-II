import useProducts from "../hooks/UseProducts";
import ProductCard from "./ProductCard";
import ProductError from "./ProductError";
import Loader from "./Loader";
import Center from "./Center";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ProductsList() {
  const { products, error, pagination, loadProducts } = useProducts();
  console.log(products);

  if (error)
    return (
      <Center>
        <ProductError
          title="Algo deu errado!"
          text="Não foi possível carregar os produtos"
        />
      </Center>
    );

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={loadProducts}
      hasMore={pagination.hasMore}
      loader={
        <div className="col-span-3">
          <Loader />
        </div>
      }
      endMessage={
        <div className="flex flex-1 items-center justify-center col-span-3 text-lg text-stone-400 font-bold">
          Você chegou ao final da lista
        </div>
      }
      className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 p-2"
    >
      {products.map((p, i) => (
        <ProductCard key={p.title + i} product={p} />
      ))}
    </InfiniteScroll>
  );
}

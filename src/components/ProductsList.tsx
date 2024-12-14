import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductError from "./ProductError";
import Loader from "./Loader";
import Center from "./Center";

type ProductsListProps = {
  //   products: Product[];
};

export default function ProductsList({}: ProductsListProps) {
  const { products, loading, error } = useProducts();

  if (error)
    return (
      <Center>
        <ProductError
          title="Algo deu errado!"
          text="Não foi possível carregar os produtos"
        />
      </Center>
    );

  if (loading) {
    return (
      <Center>
        <Loader text="Carregando produtos..." />;
      </Center>
    );
  }

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
      {products.map((p) => (
        <ProductCard key={p.title} product={p} />
      ))}
    </div>
  );
}

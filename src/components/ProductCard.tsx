import type { Product } from "../types/Product.type";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col  shadow-md hover:scale-[101%] cursor-pointer transition-all relative overflow-hidden group">
      <img
        className="rounded-md w-full rounded-b-none"
        src={product.images[0]}
      />
      <div className="flex flex-col flex-1 p-3 justify-center">
        <p className="text-stone-700 self-start font-bold text-md">
          {product.title}
        </p>
        <p className="text-emerald-500 font-bold">R${product.price}</p>
        <p className="absolute top-2 right-2  border-2 border-indigo-500 rounded-md p-1 bg-indigo-500 text-white font-bold ">
          {product.category.name}
        </p>
      </div>
      <div className="bg-emerald-600 p-1 font-bold text-white  opacity-0 transition-all delay-100 group-hover:flex justify-center items-center w-full group-hover:opacity-100 ease-in-out gap-1 h-8">
        <ShoppingCart />
        Adicionar ao Carrinho
      </div>
    </div>
  );
}

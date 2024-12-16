import type { Product } from "../types/Product.type";
import { ShoppingCart, ShoppingBag } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex h-50 flex-col shadow-md hover:scale-[101%] cursor-pointer transition-all  overflow-hidden group relative">
      <img
        className="rounded-md rounded-b-none aspect-square"
        src={product.image}
      />
      <div className="flex flex-col flex-1 p-3">
        <p
        title={product.title} 
        className="text-stone-700 self-start font-bold text-md text-ellipsis">
          {product.title}
        </p>
        <p className="text-emerald-500 font-bold">R${product.price}</p>
        <p className="absolute top-2 right-2  border-2 border-indigo-500 rounded-md p-1 bg-indigo-500 text-white font-bold text-sm">
          {product.category}
        </p>
      </div>
     

      <div className="flex gap-1 items-center p-2">
        <div className="flex gap-1 bg-emerald-600  rounded-md justify-center text-white items-center p-2 group-hover:opacity-100 hover:bg-emerald-500 flex-1">  
            <ShoppingBag className="text-white" />
            Comprar
        </div>
        <div className="flex gap-1 bg-emerald-600 text-white  rounded-md justify-center text-whit items-center p-2 group-hover:opacity-100 hover:bg-emerald-500 flex-1">  
            <ShoppingCart  className="text-white" />
            Carrinho
        </div>
      </div>
   
    </div>
  );
}

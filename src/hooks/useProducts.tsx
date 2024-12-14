import { useEffect, useState } from "react";
import { Product } from "../types/Product.type";
import api from "../lib/axios/axios";
import { AxiosError } from "axios";

export default function UseProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const loadProducts = async (offset = 0, limit = 10) => {
    setLoading(true);
    try {
      const { data } = await api.get<Product[]>("/", {
        params: {
          offset,
          limit,
        },
      });
      setProducts(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading, error };
}

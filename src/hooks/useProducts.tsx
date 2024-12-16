import { useEffect, useState } from "react";
import { Product } from "../types/Product.type";
import api from "../lib/axios/axios";
import { AxiosError } from "axios";

type Pagination = {
  offset: number;
  limit: number;
  hasMore: boolean;
};

export default function UseProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    limit: 10,
    hasMore: true,
  });

  const loadProducts = async () => {
    setLoading(true);
    const { offset, limit } = pagination;
    try {
      const { data } = await api.get<Product[]>("", {
        params: {
          offset,
          limit,
        },
      });
      console.log(data)
      const cleanupData = data.filter((p) => p.title != "New Product");
      setProducts((current) => [...current, ...cleanupData]);
      setPagination((current) => ({
        ...current,
        offset: current.offset + limit,
        hasMore: cleanupData.length > 0,
      }));
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

  return { products, loading, error, pagination, loadProducts };
}

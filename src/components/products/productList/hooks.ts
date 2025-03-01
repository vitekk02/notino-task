import { useMemo, useState } from "react";
import { ProductDto } from "../../../api/dtos/product";

interface UseProductFilterReturn {
  filteredProducts: ProductDto[];
  minAvailablePrice?: number;
  maxAvailablePrice?: number;
  handleFilter: (min: number | null, max: number | null) => void;
  hasActiveFilter: boolean;
  noProductsFound: boolean;
  minPrice: number | null;
  maxPrice: number | null;
}

export const useProductFilter = (
  products: ProductDto[]
): UseProductFilterReturn => {
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (!product.price) return false;
      if (minPrice && product.price < minPrice) return false;
      if (maxPrice && product.price > maxPrice) return false;
      return true;
    });
  }, [products, minPrice, maxPrice]);

  const minAvailablePrice = useMemo(() => {
    if (!products?.length) return undefined;
    return Math.min(...products.map((p) => p.price || Infinity));
  }, [products]);

  const maxAvailablePrice = useMemo(() => {
    if (!products?.length) return undefined;
    return Math.max(...products.map((p) => p.price || -Infinity));
  }, [products]);

  const handleFilter = (min: number | null, max: number | null) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const hasActiveFilter = minPrice !== null || maxPrice !== null;
  const noProductsFound = filteredProducts.length === 0;

  return {
    filteredProducts,
    minAvailablePrice,
    maxAvailablePrice,
    handleFilter,
    hasActiveFilter,
    noProductsFound,
    minPrice,
    maxPrice,
  };
};

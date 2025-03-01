import { FC, useMemo, useState } from "react";
import { useGetAllProducts } from "../../../api/generated/fakeStoreAPI";
import { isValidProduct, productMapper } from "../../../api/mappers/product";
import { EmptyMessage, Grid } from "./productListStyles";
import { ProductCard } from "../productCard/productCard";
import { PriceFilter } from "../productFilter/productFilter";
import { Loading } from "../../layout/loading/loading";
import { Error } from "../../layout/error/error";

export const ProductList: FC = () => {
  const { data: products, isLoading, isError } = useGetAllProducts();
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const handleFilter = (min: number | null, max: number | null) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const mappedProducts = useMemo(() => {
    return (products?.filter(isValidProduct) || []).map(productMapper);
  }, [products]);

  const filteredProducts = useMemo(() => {
    return mappedProducts.filter((product) => {
      if (!product.price) return false;
      if (minPrice && product.price < minPrice) return false;
      if (maxPrice && product.price > maxPrice) return false;
      return true;
    });
  }, [mappedProducts, minPrice, maxPrice]);

  const minAvailablePrice = useMemo(() => {
    if (!products?.length) return undefined;
    return Math.min(...products.map((p) => p.price || Infinity));
  }, [products]);

  const maxAvailablePrice = useMemo(() => {
    if (!products?.length) return undefined;
    return Math.max(...products.map((p) => p.price || -Infinity));
  }, [products]);

  if (isLoading) {
    return <Loading message="Loading products..." />;
  }

  if (isError || mappedProducts.length === 0) {
    return <Error message="Failed to load products. Please try again later." />;
  }

  const hasActiveFilter = minPrice !== null || maxPrice !== null;
  const noProductsFound = filteredProducts.length === 0;

  return (
    <>
      <PriceFilter
        onFilter={handleFilter}
        minAvailable={minAvailablePrice}
        maxAvailable={maxAvailablePrice}
      />
      {noProductsFound ? (
        <EmptyMessage>
          {hasActiveFilter
            ? `No products found ${
                minPrice !== null && maxPrice !== null
                  ? `between $${minPrice} and $${maxPrice}`
                  : minPrice !== null
                  ? `above $${minPrice}`
                  : `below $${maxPrice}`
              }`
            : "No products available"}
        </EmptyMessage>
      ) : (
        <Grid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </>
  );
};

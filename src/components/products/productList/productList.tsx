import { FC, useMemo } from "react";
import { useGetAllProducts } from "../../../api/generated/fakeStoreAPI";
import { isValidProduct, productMapper } from "../../../api/mappers/product";
import { EmptyMessage, Grid } from "./productListStyles";
import { ProductCard } from "../productCard/productCard";
import { PriceFilter } from "../productFilter/productFilter";
import { Loading } from "../../layout/loading/loading";
import { Error } from "../../layout/error/error";
import { useProductFilter } from "./hooks";

export const ProductList: FC = () => {
  const { data: products, isLoading, isError } = useGetAllProducts();

  const mappedProducts = useMemo(() => {
    return (products?.filter(isValidProduct) || []).map(productMapper);
  }, [products]);

  const {
    filteredProducts,
    minAvailablePrice,
    maxAvailablePrice,
    handleFilter,
    hasActiveFilter,
    noProductsFound,
    minPrice,
    maxPrice,
  } = useProductFilter(mappedProducts);

  if (isLoading) {
    return <Loading message="Loading products..." />;
  }

  if (isError || mappedProducts.length === 0) {
    return <Error message="Failed to load products. Please try again later." />;
  }

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

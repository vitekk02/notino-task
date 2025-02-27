import { FC } from "react";
import { useGetAllProducts } from "../../../api/generated/fakeStoreAPI";
import { ProductCard } from "../productCard/productCard";
import { productMapper } from "../../../api/mappers/product";
import { Grid } from "./productListStyles";

export const ProductList: FC = () => {
  const { data: products, isLoading } = useGetAllProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Grid>
      {products?.map((product) => (
        <ProductCard key={product.id} product={productMapper(product)} />
      ))}
    </Grid>
  );
};

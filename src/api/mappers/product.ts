import { ProductDto } from "../dtos/product";
import { Product } from "../models";

export const productMapper = (product: Product): ProductDto => ({
  id: product.id,
  name: product.title,
  description: product.description,
  price: product.price,
  imageUrl: product.image,
  category: product.category,
});

import { ProductDto } from "../dtos/product";
import { Product } from "../models";

export const productMapper = (product: Product): ProductDto => ({
  id: product.id,
  name: product.title || "Unnamed Product",
  description: product.description || "No description available",
  price: product.price,
  imageUrl: product.image || "https://via.placeholder.com/300",
  category: product.category || "Uncategorized",
});

export const isValidProduct = (product: Product): boolean => {
  return product.id !== undefined && product.price !== undefined;
};

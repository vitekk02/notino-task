import { FC } from "react";
import { ProductDto } from "../../../api/dtos/product";
import { Card, ImageContainer, Image, Title, Price } from "./productCardStyles";

interface Props {
  product: ProductDto;
}

export const ProductCard: FC<Props> = ({ product }) => (
  <Card>
    <ImageContainer>
      <Image src={product.imageUrl} alt={product.name} />
    </ImageContainer>
    <Title>{product.name}</Title>
    <Price>${product.price}</Price>
  </Card>
);

import { FC } from "react";
import { ProductDto } from "../../../api/dtos/product";
import { Card, ImageContainer, Title, Price } from "./productCardStyles";
import { useNavigate } from "react-router-dom";
import { Image } from "../../common/image/image";

interface Props {
  product: ProductDto;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/product/${product.id}`)}>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.name} />
      </ImageContainer>
      <Title>{product.name}</Title>
      <Price>${product.price}</Price>
    </Card>
  );
};

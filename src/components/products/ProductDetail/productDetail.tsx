import { FC, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductById } from "../../../api/generated/fakeStoreAPI";
import { productMapper } from "../../../api/mappers/product";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Header,
  BackButton,
  Container,
  Content,
  Description,
  ImageSection,
  Price,
  Title,
  DialogOverlay,
  DialogContent,
  DialogClose,
  ModalImage,
  Category,
  DialogTitle,
  DialogDescription,
} from "./productDetailStyles";
import { Loading } from "../../layout/loading/loading";
import { Error } from "../../layout/error/error";
import { Image } from "../../common/image";

export const ProductDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { data: product, isLoading, isError } = useGetProductById(Number(id));

  if (isLoading) {
    return <Loading message="Loading product details..." />;
  }

  if (isError || !product) {
    return <Error message="Product not found" />;
  }

  const mappedProduct = productMapper(product);

  return (
    <>
      <Header>
        <BackButton onClick={() => navigate("/")}>Back to List</BackButton>
      </Header>

      <Container>
        <ImageSection>
          <Image
            src={mappedProduct.imageUrl}
            alt={mappedProduct.name}
            onClick={() => setIsOpen(true)}
          />
        </ImageSection>
        <Content>
          <Title>{mappedProduct.name}</Title>
          <Category>{mappedProduct.category}</Category>
          <Price>${mappedProduct.price}</Price>
          <Description>{mappedProduct.description}</Description>
        </Content>
      </Container>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle>{mappedProduct.name}</DialogTitle>
            <DialogDescription>
              Product image for {mappedProduct.name}
            </DialogDescription>
            <ModalImage src={mappedProduct.imageUrl} alt={mappedProduct.name} />
            <DialogClose>&times;</DialogClose>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

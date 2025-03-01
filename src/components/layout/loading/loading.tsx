import { FC } from "react";
import { LoadingContainer, Spinner, Message } from "./loadingStyles";

interface Props {
  message?: string;
}

export const Loading: FC<Props> = ({ message = "Loading..." }) => {
  return (
    <LoadingContainer>
      <Spinner />
      <Message>{message}</Message>
    </LoadingContainer>
  );
};

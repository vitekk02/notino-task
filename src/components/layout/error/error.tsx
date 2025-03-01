import { FC } from "react";
import { ErrorContainer, ErrorIcon, Message } from "./errorStyles";

interface Props {
  message?: string;
}

export const Error: FC<Props> = ({ message = "Something went wrong..." }) => {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <Message>{message}</Message>
    </ErrorContainer>
  );
};

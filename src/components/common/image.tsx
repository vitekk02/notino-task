import { FC, useState } from "react";
import { ImageWrapper, StyledImage, Placeholder } from "./imageStyles";

interface Props {
  src?: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
}

export const Image: FC<Props> = ({ src, alt, onClick, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <ImageWrapper $isLoading={isLoading} className={className}>
      {isLoading && <Placeholder />}
      {!error && (
        <StyledImage
          src={src}
          alt={alt}
          onClick={onClick}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
          $isLoading={isLoading}
        />
      )}
      {error && (
        <StyledImage
          src="https://via.placeholder.com/300?text=Image+Not+Found"
          alt="Failed to load image"
          $isLoading={false}
        />
      )}
    </ImageWrapper>
  );
};

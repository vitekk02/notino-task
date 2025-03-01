import { FC, useState, FormEvent } from "react";
import {
  FilterContainer,
  InputGroup,
  Input,
  FilterButton,
  Label,
  MinMaxButton,
  ButtonGroup,
  Tooltip,
  FilterButtonContainer,
} from "./productFilterStyles";

interface Props {
  onFilter: (minPrice: number | null, maxPrice: number | null) => void;
  minAvailable?: number;
  maxAvailable?: number;
}

export const PriceFilter: FC<Props> = ({
  onFilter,
  minAvailable,
  maxAvailable,
}) => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onFilter(
      minPrice ? Number(minPrice) : null,
      maxPrice ? Number(maxPrice) : null
    );
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    onFilter(null, null);
  };

  const isValidInput = () => {
    const min = Number(minPrice);
    const max = Number(maxPrice);

    if (minPrice && maxPrice) {
      return min <= max && min >= 0;
    }
    return true;
  };

  const getValidationMessage = () => {
    const min = Number(minPrice);
    const max = Number(maxPrice);

    if (minPrice && maxPrice && min > max) {
      return "Minimum price cannot be greater than maximum price";
    }
    if (min < 0) {
      return "Price cannot be negative";
    }
    return "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterContainer>
        <InputGroup>
          <Label htmlFor="minPrice">Min Price:</Label>
          <div>
            <Input
              id="minPrice"
              type="number"
              min="0"
              step="0.01"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min"
            />
            {minAvailable !== undefined && (
              <ButtonGroup>
                <MinMaxButton
                  type="button"
                  onClick={() => setMinPrice(minAvailable.toString())}
                >
                  Set Min (${minAvailable})
                </MinMaxButton>
              </ButtonGroup>
            )}
          </div>
        </InputGroup>

        <InputGroup>
          <Label htmlFor="maxPrice">Max Price:</Label>
          <div>
            <Input
              id="maxPrice"
              type="number"
              min="0"
              step="0.01"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max"
            />
            {maxAvailable !== undefined && (
              <ButtonGroup>
                <MinMaxButton
                  type="button"
                  onClick={() => setMaxPrice(maxAvailable.toString())}
                >
                  Set Max (${maxAvailable})
                </MinMaxButton>
              </ButtonGroup>
            )}
          </div>
        </InputGroup>

        <FilterButtonContainer>
          <FilterButton type="submit" disabled={!isValidInput()}>
            Filter
          </FilterButton>
          {!isValidInput() && <Tooltip>{getValidationMessage()}</Tooltip>}
        </FilterButtonContainer>

        {(minPrice || maxPrice) && (
          <FilterButton type="button" onClick={handleReset}>
            Reset
          </FilterButton>
        )}
      </FilterContainer>
    </form>
  );
};

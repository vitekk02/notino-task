import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #2980b9;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  color: #666;
  font-size: 0.9rem;
`;

export const MinMaxButton = styled.button`
  padding: 4px 8px;
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background: #333;
  color: white;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #333;
  }
`;

export const FilterButtonContainer = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    opacity: 1;
  }
`;

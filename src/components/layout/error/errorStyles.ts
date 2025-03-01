import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 16px;
  color: #e74c3c;
`;

export const ErrorIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const Message = styled.div`
  font-size: 1.5rem;
  color: #666;
  text-align: center;
`;

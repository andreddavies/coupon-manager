import styled from "styled-components";

const ToggleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const ToggleWrapper = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  margin: 0.25rem 0;
  align-items: center;
`;

const Span = styled.span`
  margin-left: 1rem;
  color: ${({ theme }) => theme.secondary};
`;

export { ToggleContainer, ToggleWrapper, Span };

import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  height: 120px;
  max-width: 980px;
  margin: 0.75rem 0;
  padding: 20px 15px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.couponCard.background};
`;

export { Card };

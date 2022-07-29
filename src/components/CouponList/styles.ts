import styled from "styled-components";

const CouponList = styled.ul`
  width: 100%;
  display: flex;
  margin: 2rem 0;
  align-items: center;
  list-style-type: none;
  flex-direction: column;

  @media screen and (min-width: 1281px) {
    margin: 3rem 0;
  }
`;

export { CouponList };

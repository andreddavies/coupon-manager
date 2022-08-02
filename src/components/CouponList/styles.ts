import styled from "styled-components";

const CouponList = styled.ul`
  width: 100%;
  display: flex;
  margin: 2rem 0;
  align-items: center;
  list-style-type: none;
  flex-direction: column;
  min-height: calc(100vh - 180px);

  @media screen and (min-width: 1281px) {
    margin: 3rem 0;
  }
`;

const Backdrop = styled.div`
  top: 0;
  left: 0;
  opacity: 0.5;
  width: 100vw;
  height: 100%;
  position: fixed;
  background-color: #000;
`;

export { CouponList, Backdrop };

import styled from "styled-components";

const Container = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.header.background};
  box-shadow: 0 2px 10px 1px ${({ theme }) => theme.header.shadow};

  @media screen and (min-width: 1281px) {
    height: 120px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1281px) {
    flex-direction: row;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.header.background};

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (min-width: 1281px) {
    margin-right: 10px;
  }
`;

const IconWrapper = styled.div`
  top: 10px;
  right: 10px;
  cursor: pointer;
  position: absolute;

  @media screen and (min-width: 1281px) {
    top: 20px;
    right: 40px;
  }
`;

export { Container, ContentContainer, LogoContainer, IconWrapper };

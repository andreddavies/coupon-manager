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

const Toggle = styled.button`
  border: 0;
  color: #fff;
  height: 24px;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  background-color: transparent;

  @media screen and (min-width: 1281px) {
    font-size: 1.2rem;
  }
`;

const AbsoluteContainer = styled.div`
  width: 90%;
  display: flex;
  height: 100px;
  padding-top: 10px;
  position: absolute;
  justify-content: space-between;
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
  cursor: pointer;
`;

export {
  Toggle,
  Container,
  IconWrapper,
  LogoContainer,
  ContentContainer,
  AbsoluteContainer,
};

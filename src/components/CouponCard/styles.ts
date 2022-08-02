import styled from "styled-components";

type CardProps = {
  urgent: boolean;
};

const Card = styled.div<CardProps>`
  width: 90%;
  display: flex;
  max-width: 980px;
  max-height: 400px;
  margin: 0.75rem 0;
  padding: 20px 15px;
  align-items: center;
  border-radius: 30px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme, urgent }) =>
    theme.couponCard[urgent ? "featuredTime" : "background"]};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > p {
    margin: 0.3rem 0;
  }
`;

const ClickableWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.button<CardProps>`
  outline: 0;
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  margin-left: 20px;
  align-items: center;
  background-color: ${({ theme, urgent }) =>
    theme.couponCard[urgent ? "featuredTime" : "background"]};

  :active {
    opacity: 0.5;
  }
`;

export {
  Card,
  CardHeader,
  CompanyLogo,
  InfoContainer,
  ClickableWrapper,
  IconWrapper,
};

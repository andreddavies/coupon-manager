import styled from "styled-components";

type ContainerProps = {
  type: "edit" | "delete";
};

const Container = styled.div<ContainerProps>`
  width: 90%;
  z-index: 100;
  display: flex;
  max-width: 900px;
  position: absolute;
  overflow-y: scroll;
  align-items: center;
  border-radius: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  top: ${({ type }) => (type === "edit" ? "10px" : "20vh")};
  background-color: ${({ theme }) => theme.modal.background};

  & > form {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (min-width: 1281px) {
    top: ${({ type }) => type === "edit" && "5vh"};
  }
`;

const DeleteContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { Container, DeleteContainer };

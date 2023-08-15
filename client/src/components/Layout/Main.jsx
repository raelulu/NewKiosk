import React, { Fragment } from "react";
import MenuSummary from "../Menu/MenuSummary";
import GlobalStyle from "../UI/GlobalStyle";
import styled from "styled-components";
import backgroundImage from "../../assets/back.jpg";

const MainContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
`;
const Main = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <MenuSummary />
      </MainContainer>
    </>
  );
};

export default Main;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  width: 50%;
  height: 30rem;
  margin: 10rem auto;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  cursor: pointer;
  height: 10rem;
  width: 12rem;
  background-color: #f3f3f3;
  color: #444444;
  margin: 1rem;
  padding: 5px 10px;
  border: 1px #dadada solid;
  border-radius: 2px;
  font-weight: bold;
  font-size: 30pt;
  outline: none;
  &:hover {
    border: 1px #c6c6c6 solid;
    box-shadow: 1px 1px 1px #eaeaea;
    color: #333333;
    background: #f7f7f7;
  }
`;

const StyledH1 = styled.h1`
  margin: 2rem;
`;

export default function MainPage() {
  return (
    <>
      <StyledDiv>
        <StyledH1>COFFEE PLANT</StyledH1>
        <Link to="/menu/:here">
          <StyledButton>매장</StyledButton>
        </Link>
        <Link to="/menu/:togo">
          <StyledButton>포장</StyledButton>
        </Link>
      </StyledDiv>
    </>
  );
}

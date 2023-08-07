import React, { Fragment } from "react";
import MenuSummary from "../Menu/MenuSummary";
import classes from "./Main.module.css";
import GlobalStyle from "../UI/GlobalStyle";

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <div className={classes["background-image"]}>
        <MenuSummary />
      </div>
    </>
  );
};

export default Main;

import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import CoffeeLogo from "../../assets/CoffeeLogo.png";
import classes from "./Header.module.css";
import GlobalStyle from "../UI/GlobalStyle";

const Header = (props) => {
  return (
    <>
      <GlobalStyle />
      <header className={classes.header}>
        <img className={classes.img} src={CoffeeLogo} alt="logo of cafe" />
        <h1 className={classes.h1}>COFFEE PLANT</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </>
  );
};

export default Header;

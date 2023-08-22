import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import CoffeeLogo from "../../assets/CoffeeLogo.png";
import classes from "./Header.module.css";
import GlobalStyle from "../UI/GlobalStyle";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <GlobalStyle />
      <header className={classes.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className={classes.img} src={CoffeeLogo} alt="logo of cafe" />
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className={classes.h1}>COFFEE PLANT</h1>
        </Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </>
  );
};

export default Header;

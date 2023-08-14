import React from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { CiShoppingCart } from "react-icons/ci";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <CiShoppingCart className={classes.icon} />
      {numberOfCartItems > 0 && (
        <span className={classes.badge}>{numberOfCartItems}</span>
      )}
    </button>
  );
};

export default HeaderCartButton;

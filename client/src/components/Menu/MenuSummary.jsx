import React from "react";
import classes from "./MenuSummary.module.css";
import MenuList from "../admin/MenuList";

const MenuSummary = () => {
  return (
    <section className={classes.summary}>
      <h3>향긋한 커피와 함께 하루를 보내요</h3>
      <MenuList />
    </section>
  );
};

export default MenuSummary;

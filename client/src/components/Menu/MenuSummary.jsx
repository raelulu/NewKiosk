import React from "react";
import classes from "./MenuSummary.module.css";
import AvailableMenu from "./AvailableMenu";

const MenuSummary = () => {
  return (
    <section className={classes.summary}>
      <AvailableMenu />
    </section>
  );
};

export default MenuSummary;

import React from 'react';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import CoffeeLogo from '../../assets/CoffeeLogo.png';
import back from '../../assets/back.png';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.img} src={CoffeeLogo} alt="logo of cafe" />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={back} alt="backgroundImg" />
      </div>
    </Fragment>
  );
};

export default Header;

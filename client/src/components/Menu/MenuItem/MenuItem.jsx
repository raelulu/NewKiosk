import React from 'react';
import { useContext } from 'react';
import MenuItemForm from './MenuItemForm';
import classes from './MenuItem.module.css';
import CartContext from '../../../store/cart-context';

// 메뉴 아이템 ( 카드 안에 있는 목록 )
const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price}`;

  const addToCartHandler = (amount) => {
    // console.log('test', props.id);
    // console.log('test1', props.name);
    // console.log('test2', amount);
    // console.log('test3', props.price);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  // name = 상품명
  // description = 설명
  // price = 가격

  // MenuItemForm 에 메뉴 DB Props 전달
  return (
    <li className={classes.menuu}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MenuItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MenuItem;

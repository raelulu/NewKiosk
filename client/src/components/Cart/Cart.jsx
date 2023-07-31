import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

import PayRequest from './PayRequest';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log('Cart의 props', props);

  const totalAmount = `${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  console.log('hasItems', hasItems);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
        /* 리스트이기 때문에 키를 전달해야함 */
        /* 또 onRemove프롭추가 CartItem컴포넌트에서 기대하는 이름이니까 */
        /* onRemove에게 cartItemRemoveHandler에 대한 포인터를 전달 */
        /* onAdd프롭추가도 마찬가지로 반복 */
        /* 이제 두함수에 대해 bind호출하고, null과 item.id를 바인드함. 이렇게 하면 추가되거나 삭제된 항목의 id가 remove핸들러로 전달됨 */
        /* bind는 향후에 함수가 실행될때 받을 인수를 미리 구성할수있음..즉, 이두함수는 item.id를 받거나 item처럼 항목 자체를 받는 다는 것. */
      ))}
    </ul>
  );

  let [pay, setPay] = useState(false);
  console.log(pay);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>총 주문금액</span>
        <span>{totalAmount}원</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          닫기
        </button>
        {hasItems && (
          <button
            className={classes.button}
            onClick={() => {
              setPay(!pay);
            }}
          >
            주문
          </button>
        )}
        {pay && <PayRequest />}
        {/* 이주문버튼은 장바구니에 항목이 있는 경우에만 나타나도록 hasItem 만듦 */}
      </div>
    </Modal>
  );
};

export default Cart;

import React from 'react';
import { useReducer } from 'react'; //state를 관리하기 위해 useReducer를 사용함
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//초기값을 상수에 담아서 사용

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // state.totalAmount 현재 토탈 가격 + 추가 아이템 가격 * 추가 아이템 수량 = 최종 가격
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // item => 메뉴리스트의 주문하기 버튼이 눌린 해당 음료 데이터 > findIndex 로 중복된 name 데이터 조회
    // 즉 중복 name 데이터의 수량만 변경하는 식
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.name === action.item.name;
    });
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // 수량 업데이트하는 부분 ( 위에서 중복값이 존재하면 밑의 식이 발동 )
    // existingCartItem 기존 데이터 값(amout, id, name, price)
    // updatedItem 기존데이터 복사, amount만 변경 => 기존수량(existingCartItem.amount) + input 수량(action.item.amount)
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      // 수량이 업데이트 됨
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log(
        'updatedItems[existingCartItemIndex]',
        updatedItems[existingCartItemIndex]
      );
    } else {
      console.log('action.item', action.item);
      updatedItems = state.items.concat(action.item);
      //concat은 새배열을 반환 즉, 얻게될 action.item을 반환
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // console.log('defaultCartState', defaultCartState);
  // console.log('CartProvider', CartProvider);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  // 위 함수가 호출될때마다 장바구니에 추가해야할 항목을 얻음
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    //cartState.Items에 접근. 왜냐하면 item은 state로 totalAmount는 cartState.totalAmount로 관리하고 있기 때문
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  console.log('cartContext.items', cartContext.items);
  console.log('cartContext.totalAmount', cartContext.totalAmount);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

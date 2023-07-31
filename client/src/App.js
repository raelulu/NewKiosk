import React, { useState } from 'react'; //여기에서 장바구니 렌더링하기때문에 useState임포트.
import Header from './components/Layout/Header';
import './App.css';
import Coffee from './components/Menu/Coffee';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Coffee />
      </main>
      {/* <Payment /> */}
    </CartProvider>
  );
}
//onShowCart는 프롭이름. 함수갖는 프롭이라 on으로 시작하는것
//Header컴포넌트에 가서 HeaderCartButton에 프롭을 처리
//그리고 HeaderCartButton에서는 받은 onClick프롭을 처리해야함(onClick은 온클릭기능하고싶어서 내가지은 이름. 다른이름이어도 됨)
//이런 여러.. 컴포넌트를 통해 프롭을 전달하는 경우. 컨텍스트로 대체가능

export default App;

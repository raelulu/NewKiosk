import React, { useState } from "react";
import Header from "./components/Layout/Header";
import "./App.css";
import Coffee from "./components/Menu/Coffee";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

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
    </CartProvider>
  );
}

export default App;

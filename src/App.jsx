import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <Header onShowCard={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;

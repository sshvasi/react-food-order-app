import React from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;

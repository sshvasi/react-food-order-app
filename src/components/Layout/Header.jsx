import React from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCard }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCard} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;

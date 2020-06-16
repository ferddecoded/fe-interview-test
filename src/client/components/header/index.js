import React from 'react';
import './index.css';

function Header({ cart }) {
  const cartItems = (cart && cart.length) || 0;
  return (
    <header>
      <h1>FancyCars.ca</h1>
      <div className="cart">Cart({cartItems})</div>
    </header>
  );
}

export default Header;

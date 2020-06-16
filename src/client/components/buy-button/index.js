import React from 'react';
import './index.css';

function BuyButton({ onClick }) {
  return <button className="buy-button" onClick={onClick}>Add to Cart</button>;
}

export default BuyButton;

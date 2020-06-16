import React from 'react';

// Empty star: ☆
// Highlighted star: ★
function RatingsStars({enabled, onHover, id }) {
  return <div onMouseLeave={() => onHover(null)} onMouseOver={() => onHover(id)}>{enabled === true ? '★' : '☆'}</div>;
}

export default RatingsStars;

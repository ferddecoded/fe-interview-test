import React, { useState } from 'react';
import './index.css';
import RatingsStars from './ratings-stars';

export default () => {
  const [hovered, setHovered] = useState(null);

  const handleHovered = (id) => {
    setHovered(id);
  };

  const renderRatings = () => {
    const render = [];
    for (let i = 1; i < 6; i++) {
      render.push(<RatingsStars id={i} onHover={handleHovered} enabled={hovered >= i} />);
    }
    return render;
  };

  return (<div className="ratings">
      {renderRatings()}
    </div>);
}

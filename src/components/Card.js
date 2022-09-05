import React, { useState } from 'react';

const Card = () => {
  const [clicked, setClicked] = useState(false);

  const wasClicked = () => {
    setClicked(true);
  };

  const wasNotClicked = () => {
    setClicked(false);
  };

  return (
    <div className="card">
      <img src="haha" alt="Card"/>
    </div>
  )
}

export default Card;
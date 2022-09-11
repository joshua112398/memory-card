import React, { useState } from 'react';

const Card = () => {
  const [clicked, setClicked] = useState(false);

  const wasClicked = () => {
    setClicked(true);
    console.log("Clicked");
  };

  const wasNotClicked = () => {
    setClicked(false);
  };

  return (
    <div className="card" onClick={wasClicked}>
      <img src="haha" alt="Card"/>
    </div>
  )
}

export default Card;
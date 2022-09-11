import React, { useState } from 'react';

const Card = (props) => {
  const [clicked, setClicked] = useState(false);

  // resets game if already clicked, else sets clicked as true
  const wasClicked = () => {
    if (clicked === true) {
      props.restartGame();
      setClicked(false);
    } else {
      setClicked(true);
      props.nextRound();
    }
  };

  return (
    <div className="card" onClick={wasClicked}>
      Hi
      <img src={props.img} alt={props.imgAlt}/>
    </div>
  )
}

export default Card;
import React, { useEffect, useState } from 'react';

const Card = (props) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (props.gameStatus === "Restarting") {
      setClicked(false);
    }
  }, [props.gameStatus])

  // resets game if already clicked, else sets clicked as true
  const wasClicked = () => {
    if (clicked === true) {
      props.restartGame();
    } else {
      setClicked(true);
      props.nextRound();
    }
  };

  return (
    <div className="card" onClick={wasClicked}>
      <img src={props.img} alt={props.imgAlt}/>
    </div>
  )
}

export default Card;
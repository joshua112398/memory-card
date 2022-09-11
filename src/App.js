import React, { useState, useEffect } from 'react';
import Card from "./components/Card";

function App() {

  const [cards, setCards] = useState([]);
  const [gameStatus, setGameStatus] = useState("Playing");

  useEffect(() => {
    setCards([
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/>,
      <Card restartGame={restartGame} nextRound={nextRound}/> 
    ])
  }, []);

  const restartGame = function() {
    console.log("Game restarted");
  }

  const nextRound = function() {
    console.log("Move to next round");
  }

  return (
    <div className="cardDeck">
      {cards}
    </div>
  )
}

export default App;

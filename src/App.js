import React, { useState, useEffect } from 'react';
import Card from "./components/Card";

function App() {

  const [cards, setCards] = useState([]);
  const [gameStatus, setGameStatus] = useState("Playing");

  useEffect(() => {
    setCards([
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/> 
    ]);
    if (gameStatus === "Restarting") {
      setGameStatus("Playing");
      console.log("Change to playing");
    }
  }, [gameStatus]);

  const restartGame = function() {
    console.log("Restarting game");
    setGameStatus("Restarting");
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

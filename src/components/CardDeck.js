import React, { useState, useEffect } from 'react';
import Card from "./Card";

function CardDeck({incrementRound, changeToFirstRound}) {

  const [cards, setCards] = useState([]);
  const [gameStatus, setGameStatus] = useState("Playing");

  useEffect(() => {

    const restartGame = function() {
      console.log("Restarting game");
      shuffleArray();
      setGameStatus("Restarting");
      changeToFirstRound();
    }
  
    // shuffles the array and card order when moving to next round
    // also increments round number by 1
    const nextRound = function() {
      console.log("Move to next round");
      shuffleArray();
      incrementRound();
    }

    setCards([
      <Card imgAlt="1" key="1" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="2" key="2" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="3" key="3" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="4" key="4" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="5" key="5" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="6" key="6" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="7" key="7" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="8" key="8" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="9" key="9" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="10" key="10" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="11" key="11" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/>,
      <Card imgAlt="12" key="12" restartGame={restartGame} nextRound={nextRound} gameStatus={gameStatus}/> 
    ]);
    shuffleArray();
    if (gameStatus === "Restarting") {
      setGameStatus("Playing");
      console.log("Change to playing");
    }
  }, [gameStatus]);


  const shuffleArray = function() {
    setCards((cards) => {
      const tempCards = [...cards];
      return (tempCards.sort(() => 0.5 - Math.random()));
    });
    console.log("Shuffled");
  }

  return (
    <div className="cardDeck">
      {cards}
    </div>
  )
}

export default CardDeck;

import React, { useState, useEffect } from 'react';
import CardDeck from './components/CardDeck';
import Header from './components/Header';

function App() {

  const [round, setRound] = useState(1);

  const changeToFirstRound = function() {
    setRound(1);
  }

  const incrementRound = function() {
    setRound((round) => {
      if (round === 12) {
        changeToFirstRound();
      } else {
        return round + 1;
      }
    })
  };

  return (
    <main>
      <Header round={round}/>
      <CardDeck incrementRound={incrementRound} changeToFirstRound={changeToFirstRound}/>
    </main>
  )
}

export default App;
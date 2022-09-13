import React, { useState, useEffect } from 'react';
import CardDeck from './components/CardDeck';
import Header from './components/Header';

function App() {
  return (
    <main>
      <Header/>
      <CardDeck/>
    </main>
  )
}

export default App;
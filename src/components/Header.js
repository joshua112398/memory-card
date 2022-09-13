import React, { useState, useEffect } from 'react';

function Header(props) {

  return (
    <header>
      <h1>MEMORY CARDS</h1>
      <p>Round: {props.round} of 12</p>
    </header>
  );
};

export default Header;
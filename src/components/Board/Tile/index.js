import React from 'react';
import './Tile.css';

const Tile = props => {
  // TODO 1) : Destructure Tile props
  const selected = false;
  return (
    <button
      className={selected ? 'tile-selected' : 'tile'}
      // TODO 5): Pass button onClick callback as props
    >
      {/* TODO 1: Render letter */}
      A
    </button>
  );
};

export default Tile;

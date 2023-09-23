import React from 'react';

const Stats = ({ stat, text }) => {
  return (
    <div>
      <h1>{stat}K</h1>
      <p>{text}</p>
    </div>
  );
};

export default Stats;

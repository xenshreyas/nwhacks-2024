"use client"

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Green = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const styles = useSpring({
    marginLeft: clicked ? '90%' : '-20%', 
    config: { tension: 250, friction: 20 },
  });

  return (
    <div>
      <animated.img
        src="/images/green_rocket.png"
        alt="Moving Rocket Image"
        style={{
          width: '460px',
          ...styles,
        }}
        onClick={handleClick}
      />
    </div>
  );
};

export default Green;
"use client"

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Red = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const styles = useSpring({
    marginLeft: clicked ? '-90%' : '20%', 
    config: { tension: 250, friction: 20 },
  });

  return (
    <div>
      <animated.img
        src="/images/red_rocket.png"
        alt="Moving Rocket Image"
        style={{
          width: '360px',
          ...styles,
        }}
        onClick={handleClick}
      />
    </div>
  );
};

export default Red;
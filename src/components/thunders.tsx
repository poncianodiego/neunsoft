"use client"

import React, { useEffect, useState } from 'react';

const Thunder = ({ path, onDone }) => {
  useEffect(() => {
    // Set a timeout to remove this thunder after the animation ends
    const timer = setTimeout(() => {
      onDone();
    }, 1000);  // Duration of the animation

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <svg
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        stroke="white"
        strokeWidth="1"
        fill="none"
        style={{
          animation: 'flash 1s linear forwards',  // 'forwards' keeps the final state after the animation
          filter: 'drop-shadow(0 0 6px white)'
        }}
      />
    </svg>
  );
};
const generateLightningPath = () => {
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight * 0.1;
  let path = `M ${startX} ${startY}`;
  let x = startX;
  let y = startY;

  while (y < window.innerHeight) {
    x += (Math.random() - 0.5) * 80;
    y += Math.random() * 50;
    path += ` L ${x} ${y}`;
  }

  return path;
};

const Thunders = () => {
  const [thunders, setThunders] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newThunder = {
        id: Date.now(),
        path: generateLightningPath()
      };
      setThunders(thunders => [...thunders, newThunder]);

      // Clean up thunders that have finished their animation
      setThunders(thunders => thunders.filter(t => Date.now() - t.id < 1000));
    }, 2000);  // Adjust timing to control the frequency of new thunders

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {thunders.map(thunder => (
        <Thunder key={thunder.id} path={thunder.path} onDone={() => setThunders(thunders => thunders.filter(t => t.id !== thunder.id))} />
      ))}
    </>
  );
};

export default Thunders;

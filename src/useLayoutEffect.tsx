import React, { useState, useLayoutEffect } from "react";

export const UseLayoutEffect = () => {
  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    let animationId: number;

    const animate = (timestamp: number) => {
      setPosition(((timestamp / 10) % window.innerWidth) / 2);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <hr />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          position: "relative",
          left: position - 25 + "px",
          top: "50%",
          transform: "translateY(-50%)",
          animationTimingFunction: "linear",
        }}
      />
    </div>
  );
};

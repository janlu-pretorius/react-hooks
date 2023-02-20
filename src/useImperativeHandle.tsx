import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export const UseImperativeHandle = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.focusInput();
  };

  return (
    <div>
      <h1>useImperativeHandle</h1>
      <hr />
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

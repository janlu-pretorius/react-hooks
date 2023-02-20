import React, { useId } from "react";

export const UseId = () => {
  const emailId = useId();
  const passwordId = useId();

  return (
    <>
      <h1>useID</h1>
      <hr />
      <form>
        <label htmlFor={emailId}>Email:</label>
        <input type="email" id={emailId} />

        <label htmlFor={passwordId}>Password:</label>
        <input type="password" id={passwordId} />

        <button type="submit">Log in</button>
      </form>
    </>
  );
};

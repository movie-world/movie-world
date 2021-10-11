import React from "react";
import { isLoggedInVar } from "../apollo";

export const LoggedInRouter = () => {
  const onClick = () => {
    isLoggedInVar(false);
  };
  return (
    <div>
      <h2>LoggedInRouter</h2>
      <button onClick={onClick}>Click to LogOut</button>
    </div>
  );
};

// import { useReactiveVar } from "@apollo/client";
import React from "react";
// import { isLoggedInVar } from "./apollo";
import { DefaultRouter } from "./routers";

function App() {
  // const isLoggedIn = useReactiveVar(isLoggedInVar);
  // return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
  return <DefaultRouter />;
}

export default App;

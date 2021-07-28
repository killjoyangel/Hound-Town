import React from "react";

const tokenContext = React.createContext({
  jwt: "",
  handleLogin: () => {}
});

export default tokenContext;
import React from "react";

import { Wrapper } from "./components/shared";
import { SiderBar } from "./components/sidebar";
// ROUTES
import { Routes } from "./routes";

function App() {
  return (
    <Wrapper>
      <SiderBar />
      <Routes />
    </Wrapper>
  );
}

export default App;

import React from "react";

import { Wrapper } from "./components/shared";
import { SiderBar } from "./components/sidebar";
import Home from "./pages/home";

function App() {
  return (
    <Wrapper>
      <SiderBar />
      <Home />
    </Wrapper>
  );
}

export default App;

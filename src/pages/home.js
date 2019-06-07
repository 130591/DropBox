import React, { Component } from "react";

import { Header } from "../components/header";
import { Wrapper } from "../components/shared";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper />
      </>
    );
  }
}

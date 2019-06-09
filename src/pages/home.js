import React, { Component } from "react";

import { Header } from "../components/header";
import { Wrapper, Column } from "../components/shared";
import { TableBox } from "../components/tableBox";
import { AppactionsMenu } from "../components/appactions";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="clear">
          <Column>
            <Header />
            <Wrapper className="tableBox">
              <TableBox />
              <AppactionsMenu />
            </Wrapper>
          </Column>
        </div>
      </>
    );
  }
}

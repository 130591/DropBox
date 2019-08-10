import React, { Component } from "react";

// COMPONENTS
import { Header } from "../components/header";
import { Wrapper, Column } from "../components/shared";
import { TableFile } from "../components/tableBox";
import { AppactionsMenu } from "../components/appactions";
// SERVICES
import { api } from "../services";

class Files extends Component {
  state = { files: [] };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const response = await api.get(
      `https://dropbox-clone-app.herokuapp.com/files/${id}`
    );
    console.log(response);
    this.setState({ files: response.data }, () =>
      console.log(this.state.files)
    );
  }

  render() {
    const { files } = this.state;
    return (
      <div className="clear">
        <Column>
          <Header />
          <Wrapper className="tableBox">
            <TableFile files={files} />
            <AppactionsMenu onPress={this.handleUpload} />
          </Wrapper>
        </Column>
      </div>
    );
  }
}

export default Files;

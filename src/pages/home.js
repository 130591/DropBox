import React, { Component } from "react";
import socket from "socket.io-client";
import uniqueId from "lodash";

// COMPONENTS
import { Header } from "../components/header";
import { Wrapper, Column } from "../components/shared";
import { TableBox } from "../components/tableBox";
import { AppactionsMenu } from "../components/appactions";
//SERVICES
import { api } from "../services";

export default class Home extends Component {
  state = { boxes: [] };

  async componentDidMount() {
    this.subscribeToNewFiles();
    const response = await api.get(
      "https://dropbox-clone-app.herokuapp.com/boxes"
    );
    this.setState({ boxes: response.data });
  }

  subscribeToNewFiles() {
    const id = this.props.match.params.id;
    const io = socket("https://dropbox-clone-app.herokuapp.com");

    io.emit("connectRoom", id);
    io.on("file", data => {
      this.setState({
        ...this.state.box,
        files: [data, ...this.state.box.files]
      });
    });
  }

  handleUpload = files => {
    console.log('files')
    files.forEach(file => {
      const id = this.props.match.params.id;
      const data = new FormData();

      data.append("file", file);

      api.post(`boxes/${id}/files`, data);
    });
  };

  render() {
    const { boxes } = this.state;
    return (
      <div className="clear">
        <Column>
          <Header />
          <Wrapper className="tableBox">
            <TableBox box={boxes} />
            <AppactionsMenu onPress={this.handleUpload} />
          </Wrapper>
        </Column>
      </div>
    );
  }
}

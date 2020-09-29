import React, { Component } from "react";
import { ListUsers, AddUsers } from "../../../components";

class AxiosDymaContainer extends Component {
  state = {
    users: [],
    selectedUser: null,
  };
  render() {
    return (
      <div
        style={{ minHeight: "100vh" }}
        className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center"
      >
        <ListUsers
          users={this.state.users}
          selectUser={(index) => this.setState({ selectedUser: index })}
        />
        <hr className="w-100 my-5" />
        <AddUsers
          user={
            this.state.users && this.state.users[this.state.selectedUser]
              ? this.state.users[this.state.selectedUser]
              : null
          }
        />
      </div>
    );
  }
}

export default AxiosDymaContainer;

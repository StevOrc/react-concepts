import React, { Component } from "react";
import { ListUsers, AddUsers } from "../../../components";
import axios from "axios";

const userEndpoint = "https://jsonplaceholder.typicode.com/users";

class AxiosDymaContainer extends Component {
  state = {
    users: [],
    selectedUser: null,
  };

  componentDidMount() {
    // const {data: users} = await axios.get(userEndpoint);
    // this.setState({
    //   users
    // })

    axios
      .get(userEndpoint)
      .then((response) => response.data)
      .then((users) => this.setState({ users }))
      .catch((err) => console.log(err));
  }

  handleAddUser = (user) => {
    console.log("AAAAAAAAAAAAA", user);
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
          onSave={this.handleAddUser}
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

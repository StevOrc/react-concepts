import React, { Component } from "react";
import { ListUsers, AddUsers } from "../../../components";
import "../../../config/axios-config";
import axios from "axios";

const userEndpoint = "/users";

class AxiosDymaContainer extends Component {
  state = {
    users: [],
    selectedUser: null,
  };

  async componentDidMount() {
    const { data: users } = await axios.get(userEndpoint);
    this.setState({
      users,
    });

    // axios
    //   .get(userEndpoint)
    //   .then((response) => response.data)
    //   .then((users) => this.setState({ users }))
    //   .catch((err) => console.log(err));
  }

  handleAddUser = async (user) => {
    const originalUsers = [...this.state.users];
    try {
      const { data: addUser } = await axios.post(userEndpoint, user);
      const users = [addUser, ...this.state.users];
      this.setState({
        users,
      });
    } catch (err) {
      alert("Error when trying to add user");
      this.setState({
        users: originalUsers,
      });
    }
  };

  handleUpdateUser = async (user) => {
    const userIndex = this.state.users.indexOf(user);
    const originalUsers = [...this.state.users];
    const originalUser = { ...user };
    try {
      user.name = "UPDATED !!";
      const users = [...this.state.users];
      users[userIndex] = { ...user };
      this.setState({
        users,
      });
      await axios.put(`${userEndpoint}/${user.id}`, user);
    } catch (error) {
      alert(`error : ${error}`);
      originalUsers[userIndex] = { ...originalUser };
      this.setState({
        users: originalUsers,
      });
    }
  };

  handleDeleteUser = async (user) => {
    const originalUsers = [...this.state.users];
    try {
      const users = this.state.users.filter((el) => el.id !== user.id);
      this.setState({
        users,
      });
      await axios.delete(`${userEndpoint}/${user.id}`);
    } catch (error) {
      alert(`error : ${error}`);
      this.setState({
        users: originalUsers,
      });
    }
  };

  render() {
    return (
      <div
        style={{ minHeight: "100vh" }}
        className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center"
      >
        <ListUsers
          onUpdate={this.handleUpdateUser}
          onDelete={this.handleDeleteUser}
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

import React, { Component } from "react";
import http from '../../../services/http.services';
import { toast} from 'react-toastify';

const apiEndPoint = "/posts";

class AxiosMoshContainer extends Component {
  state = {
    posts: [],
    errorDelete: null,
  };

  async componentDidMount() {
    const { data: posts } = await http.get(apiEndPoint);
    this.setState({
      posts,
    });
  }

  handleAdd = async () => {
    const obj = { title: "Test", body: "TEST TEST TEST" };
    const { data: post } = await http.post(apiEndPoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({
      posts,
    });
  };

  handleUpdate = async (post) => {
    const originalPost = { ...post };
    post.title = "UPDATE";
    let posts = [...this.state.posts];
    const postIndex = this.state.posts.indexOf(post);
    posts[postIndex] = { ...post };
    this.setState({
      posts,
    });
    try {
      await http.put(`${apiEndPoint}/${post.id}`, post);
      throw new Error("");
    } catch (ex) {
      alert("Error when try to updtate post");
      posts[postIndex] = { ...originalPost };
      this.setState({
        posts,
      });
    }
  };

  handleDelete = async (post) => {
    const originalPosts = [...this.state.posts];
    const posts = this.state.posts.filter((el) => el.id !== post.id);
    this.setState({
      posts,
    });
    try {
      await http.delete(`${apiEndPoint}/${post.id}`);
      toast.success('Post deleted');
    } catch (ex) {
      if(ex.response && ex.response.status === 404){
        toast.error('Post has been already deleted');
      }
      console.log("error", ex);
      this.setState({
        posts: originalPosts,
      });
    }
  };
  render() {
    return (
      <div className="container-fluid mt-5">
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AxiosMoshContainer;

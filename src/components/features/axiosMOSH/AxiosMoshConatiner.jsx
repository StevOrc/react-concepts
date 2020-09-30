import React, { Component } from "react";
import axios from 'axios';

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

class AxiosMoshContainer extends Component {
  state = {
    posts: [],
    errorDelete: null 
  };

  async componentDidMount(){
    const {data: posts} = await axios.get(apiEndPoint);
    this.setState({
      posts
    })
  }

  handleAdd = async () => {
    const obj = {title: "Test", body: "TEST TEST TEST"};
    const {data: post} = await axios.post(apiEndPoint, obj);
    
    const posts = [post, ...this.state.posts];
    this.setState({
      posts
    });
  };

  handleUpdate = async (post) => {
    const originalPost = {...post};
    post.title = "UPDATE";
    let posts = [...this.state.posts];
    const postIndex = this.state.posts.indexOf(post);
    posts[postIndex] = {...post};
    this.setState({
      posts
    });
    try{
      await axios.put(`${apiEndPoint}/${post.id}`, post);
      throw new Error('');
    }catch (ex) {
      alert('Error when try to updtate post');
      posts[postIndex] = {...originalPost}
      this.setState({
        posts
      })
    }

  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter( el => el.id !== post.id);
    this.setState({
      posts
    });
    try {
      await axios.delete(`${apiEndPoint}/${post.id}`);
      throw new Error(''); 
    } catch (error) {
      alert('Something wrong when delete post');
      this.setState({
        posts: originalPosts
      })
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

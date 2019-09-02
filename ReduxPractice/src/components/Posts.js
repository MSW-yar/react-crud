import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SearchPost from "./SearchPost";

class Posts extends Component {
  handleAddPost = e => {
    const { postTitle, postBody } = e.target.children;
    e.preventDefault();
    if (postTitle.value === "" || postBody.value === "") {
      alert("Please add a post with title and body");
    } else {
      this.props.addPost(postTitle.value, postBody.value);

      postTitle.value = "";
      postBody.value = "";
    }
  };

  addPost = submitFrom => {
    return (
      <form onSubmit={submitFrom} id="thisform">
        <label>Title </label>
        <input type="text" name="postTitle" />
        <br />
        <label>Body</label>
        <input type="text" name="postBody" />
        <br />
        <button>Add Post</button>
      </form>
    );
  };

  mapEachPost = () => {
    return this.props.posts.length ? (
      this.props.posts.map(post => {
        return (
          <div key={Math.random()}>
            <Link to={"/posts/" + post.id}>
              <h1>{post.title}</h1>
            </Link>
            <h2>{post.body}</h2>
          </div>
        );
      })
    ) : (
      <div className="error">No Posts!</div>
    );
  };

  render() {
    return (
      <div>
        <p style={{ "text-align": "center" }}>Add New Post</p>
        {this.addPost(this.handleAddPost)}

        <p style={{ "text-align": "center" }}>Search a Post</p>
        <SearchPost />
        <div id="posts"> {this.mapEachPost()} </div>
      </div>
    );
  }
}

//  ================= //

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, body) => {
      dispatch({
        title: title,
        body: body,
        type: "addPost"
      });
    }
  };
};

//  ============== //

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import UpdatePost from "./UpdatePost";

class OnePost extends Component {
  handleDeletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/posts");
  };

  render() {
    const post = this.props.post ? (
      <div id="posts">
        <h1>{this.props.post.title}</h1>
        <h2>{this.props.post.body}</h2>
        <button onClick={this.handleDeletePost}>Delete Post</button>
        <br />
        <br />
        <UpdatePost post={this.props.post} />
      </div>
    ) : (
      <div className="error">
        Post Not Available!
        <Link to="/posts">
          <button>See all posts</button>
        </Link>
      </div>
    );
    return <div>{post}</div>;
  }
}

//  ============================= //

const mapStateToProps = (state, ownState) => {
  let id = ownState.match.params.postId;
  return {
    post: state.posts.find(post => {
      return post.id == id;
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch({
        type: "deletePost",
        id: id
      });
    }
  };
};

// ================ //
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnePost);

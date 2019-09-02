import React, { Component } from "react";
import { connect } from "react-redux";

class SearchPost extends Component {
  state = {
    post: {}
  };

  findPost = e => {
    e.preventDefault();
    let { searchPost } = e.target.children;
    let post = this.props.posts.find(post => {
      return post.title == searchPost.value;
    });
    this.setState({
      post: post
    });
    searchPost.value = "";
  };

  displayPost = () => {
    return this.state.post ? (
      <div>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div>
        <h3>No Post !</h3>
      </div>
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.findPost}>
          <input type="text" name="searchPost" placeholder="post title" />
          <br />
          <button>Search</button>
        </form>
        {this.displayPost()}
      </div>
    );
  }
}

// =========================== //

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

// ==================== //

export default connect(mapStateToProps)(SearchPost);

import React, { Component } from "react";
import { connect } from "react-redux";

class UpdatePost extends Component {
  state = {
    showUpdatePostForm: false
  };

  handleUpdatePost = e => {
    e.preventDefault();
    let { updatedTitle, updatedBody } = e.target.children;
    this.props.updatePost(
      updatedTitle.value,
      updatedBody.value,
      this.props.post.id
    );
    updatedTitle.value = "";
    updatedBody.value = "";
  };

  showUpdateForm = () => {
    return this.state.showUpdateForm ? (
      <div>
        <p>Edit Post</p>
        <form onSubmit={this.handleUpdatePost}>
          <input type="text" name="updatedTitle" />
          <br />
          <input type="text" name="updatedBody" />
          <br />
          <button>Update</button>
        </form>
      </div>
    ) : (
      <button
        onClick={() => {
          this.setState({
            showUpdateForm: true
          });
        }}
      >
        Edit Post
      </button>
    );
  };
  render() {
    return <div>{this.showUpdateForm()}</div>;
  }
}

// ======================= //

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePost: (title, body, id) => {
      dispatch({
        type: "updatePost",
        title,
        body,
        id
      });
    }
  };
};

// ======================= //

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePost);

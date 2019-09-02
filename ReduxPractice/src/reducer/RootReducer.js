const initState = {
  posts: [
    { title: "Hello World", body: "Hello World: first program!!!", id: "1" },
    { title: "Second Post", body: "Body of dummy post 2... ", id: "2" }
  ]
};

export const rootReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case "addPost":
      newState = {
        ...state,
        posts: [
          ...state.posts,
          {
            title: action.title,
            body: action.body,
            id: Math.random()
          }
        ]
      };
      break;

    case "deletePost":
      newState = {
        ...state,
        posts: state.posts.filter(post => {
          return post.id !== action.id;
        })
      };
      break;

    case "updatePost":
      let posts = state.posts.filter(post => {
        return post.id !== action.id;
      });
      newState = {
        ...state,
        posts: [
          ...posts,
          {
            title: action.title,
            body: action.body,
            id: action.id
          }
        ]
      };
      break;

    default:
      break;
  }

  return newState;
};

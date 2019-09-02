import React from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import OnePost from './components/OnePost'

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:postId" component={OnePost} />
      </BrowserRouter>
    </div>
  );
}

export default App;

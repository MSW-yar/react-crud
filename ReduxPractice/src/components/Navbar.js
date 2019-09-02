import React, { Component } from "react";
import '../css/Navbar.css'

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </nav>
    );
  }
}

export default Navbar;
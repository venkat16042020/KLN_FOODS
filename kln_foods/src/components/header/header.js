import React, { Component } from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (<div> <h1>KLN Foods</h1>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"><Link class="nav-link text-dark" to="/home">Home</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/menu">Menu</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/orders">Orders</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/bills">Bills</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/suggestions">Suggestions</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/food_preparation">Preparation Videos</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/contactus">Contact Us</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/history">History</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/media">Media</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/aboutus">About Us</Link></li>
            <li class="nav-item active"><Link class="nav-link text-dark" to="/docs">Docs</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>

  )
}


export default Header;

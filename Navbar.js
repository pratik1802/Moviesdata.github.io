import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="fa-thin fa-house"></i> Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="
navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to='/' class="nav-link active">Home</Link>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link active" aria-current="page" href="#">About Us</a> */}
            <Link to='/About' class="nav-link active">About Us</Link>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link active" aria-current="page" href="#">Service</a> */}
            <Link to='/Service' class="nav-link active">Service</Link>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link active" aria-current="page" href="#">Service</a> */}
            <Link to='/Movies' class="nav-link active">Movies</Link>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link active" aria-current="page" href="#">Contact Us</a> */}
            <Link to='/Contact' class="nav-link active">Contact us</Link>
          </li>
          
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  );
}
export default Navbar;

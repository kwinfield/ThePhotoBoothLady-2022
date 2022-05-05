import React from 'react';
import './navbar.scss';

function Navbar (){
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
    <div class="container-fluid">
    <div class="d-flex align-items-center">
      <img src="/images/pbl-logo.png" alt="" className='nav-logo' /><br/>
      <p className='caption'>Your Event Deserves a Photo Booth!</p>
    </div>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <a class="nav-link" href="#">Who We Are</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fun Photos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Booths For Rent</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Book Now/Contact Us</a>
          </li>
        </ul>
      </div>
  </nav>
}


export default Navbar;
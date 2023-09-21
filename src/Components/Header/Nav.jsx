import React from 'react'
import './Nav.css'
import images from './../../Images/logo.jpg';


function Nav() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand justify-content-center" href="#">
      <img src={images} alt="" width="60" height="30" class="d-inline-block align-text-top "/>
      <label >Relatto</label>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active fs-5  " aria-current="page" href="/">Home</a>
        <a class="nav-link  active fs-5" href="/products">Products</a>
        <a class="nav-link active fs-5" href="/profile">Profile</a>
        <a class="nav-link active fs-5" aria-current="page" href="/signup">SignUp</a>
        <a class="nav-link active fs-5" aria-current="page" onClick={localStorage.clear()}>Logout</a>
      </div>
    </div>
  </div>
</nav>


  </div>
  )
}

export default Nav
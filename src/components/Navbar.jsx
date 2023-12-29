import React from 'react'
import logo from "../images/logo.jpeg";

export const Navbar = (props) => {
  return (
    
    <>
    <div><nav className="navbar navbar-expand-lg bg-dark-i">
    <div className="container-fluid bg-dark-i">
      <a className="navbar-brand  nav-font" href="/">
      <img src={logo} alt="" width="30" height="30" class="d-inline-block mx-2 align-text-top"/>
        Shine</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
            <a className="nav-link nav-font " aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-font " aria-current="page" href="/gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-font " aria-current="page" href="/order">Order</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-font " aria-current="page" href="/about">About Me</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light  nav-font" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
    </>
  )
}
export default Navbar;
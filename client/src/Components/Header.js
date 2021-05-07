import React from 'react'
import {NavLink} from 'react-router-dom'

const Header=()=>(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Techokids</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/"
          activeClassName='is-active' exact={true}> Dashboard </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/stu_register">S-Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/stu_login">S-Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tea_register">T-Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tea_login">T-Login</NavLink>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
)

export default Header
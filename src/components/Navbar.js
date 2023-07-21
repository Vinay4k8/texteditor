import React from 'react'
import PropTypes from 'prop-types'
import { BsBrightnessHighFill } from 'react-icons/bs'
// import {Link} from "react-router-dom";

const Navbar = (props) => {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" ><i className="fa-solid fa-house"></i></a>
        </li>
        
      </ul>
      <div className="form-check form-switch">
                <input onClick={props.handleMode} style={{backgroundColor:"#D8D8D8"}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      </div>
      {props.mode==="dark"?<BsBrightnessHighFill size={20}/>:
        <i className="fa-sharp fa-solid fa-moon"></i>}
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={title:PropTypes.string}
Navbar.defaultProps={title:"setTitle Here"}

export default Navbar

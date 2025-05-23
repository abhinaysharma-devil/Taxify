import React from 'react';
import { Link } from 'react-router-dom';
import { serviceDetails } from '../../src/data/dataset';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Header = () => {

  const [serviceState] = useState(serviceDetails)
  const navigate = useNavigate()

  function gotoServices(item) {
    navigate("/services/x", { state: { data: item } })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ boxShadow: "0px 0px 3px 0px gray"}}>
        {/* <a className="navbar-brand" href="/">Taxify</a> */}
        <img src="taxify-logo-png.png" alt="" width="100px"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact US</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {serviceState.map((item, index) => {
                  return (
                    <>
                      <a className="dropdown-item" key={index} onClick={() => { gotoServices(item) }}>{item.service_title}</a>
                    </>
                  )
                })}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">About Us</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
};
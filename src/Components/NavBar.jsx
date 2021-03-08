import React from 'react' 
import {Navbar} from 'react-bootstrap'
import logo from '../Images/logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function NavBar(){
    return(
      <div>
        <Navbar style={{paddingRight: 20, paddingLeft: 20, backgroundColor: '#EBD489', display:'flex', justifyContent: 'space-between'}} expand="lg">
          <Navbar.Brand href="/" style={{fontFamily: 'Rammetto One', fontSize: 50}}>Menu Search</Navbar.Brand>
          <Navbar.Brand href="/" >
            <img
              src={logo}
              alt="logo"
              height="65"
              width="65"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
      </div>
    )
}
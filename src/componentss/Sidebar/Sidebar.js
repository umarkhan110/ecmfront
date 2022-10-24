
import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Icons from "../../views/Icons";
import { Nav } from "react-bootstrap";

//import logo from "../../assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();

  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("../../assets/img/reactlogo.png").default}
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
            Creative Tim
          </a>
        </div>
        <Nav>
                <li><NavLink exact to="/dashboard" className="nav-link" activeClassName="active"><i className="nc-icon nc-alien-33"/><p>DASHBOARD</p></NavLink></li>
                <li><NavLink exact to="/userprofile" className="nav-link" activeClassName="active"><i className="nc-icon nc-circle-09" /><p>USERP ROFILE</p></NavLink></li>       
                <li><NavLink exact to="/table" className="nav-link" activeClassName="active"><i className="nc-icon nc-notes" /><p>Table List</p></NavLink></li>
                <li><NavLink exact to="/typography" className="nav-link" activeClassName="active"><i className="nc-icon nc-paper-2"/><p>TYPOGRAPHY</p></NavLink></li>
                <li><NavLink exact to="/icons" className="nav-link" activeClassName="active"><i className="nc-icon nc-atom" /><p>ICONS</p></NavLink></li>
                {/* <li><NavLink exact to="/maps" className="nav-link" activeClassName="active"><i className="nc-icon nc-pin-3" /><p>MAPS</p></NavLink></li> */}
                <li><NavLink exact to="/notification" className="nav-link" activeClassName="active"><i className="nc-icon nc-bell-55" /><p>NOTIFICATION</p></NavLink></li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;

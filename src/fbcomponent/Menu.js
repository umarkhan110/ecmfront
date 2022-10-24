import React from 'react'
import { NavLink, Link } from "react-router-dom";
import logo from './img/logo.png'
const Menu = () => {
    return (
        <div className='header'>
            <header>
                <nav className="navbar has-shadow is-small" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link className="navbar-item" to="/">
                                <img src={logo}></img>
                            </Link>
                            <a role="button" className="navbar-burger" aria-label="menu" onClick="this.classList.toggle('is-active');document.getElementById('snapsave-menu').classList.toggle('is-active');">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div id="snapsave-menu" className="navbar-menu">
                            <div className="navbar-start">

                                <Link to="/howtouse" className="navbar-item">How to Use ?</Link>
                                <Link to="/faq" className="navbar-item">FAQs</Link>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <a className="button is-success" href="https://chrome.google.com/webstore/detail/1-fb-video-downloader-hd /bgddpglbnfmbgakaaaadjkihcfelflhp" target="_blank" rel="nofollow noopener">
                                            Blog
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            
        </div>
    )
}

export default Menu

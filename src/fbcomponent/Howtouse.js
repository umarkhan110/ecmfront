import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import aa from './img/aa.png';
import logo from './img/logo.png'
const Howtouse = () => {
  return (
    <div>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="why-heading">
                <br></br><br></br><br></br>
                <h3 className="title why-title is-3">How to <span className="text-primary">Download video Facebook</span></h3>

              </div>
            </div>
          </div>
          <div className="columns">
            <div className="item column is-4">
              <img src={aa}></img>
              <div className="des">
                <h4 className="title is-4"><span className="step-count">1</span>Copy and paste video link</h4>
                <p>From <a href="https://www.facebook.com/" className="open-externallink" target="_blank" rel="nofollow noopener noreferrer">Facebook</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
              </div>
            </div>
            <div className="item column is-4">
              <img src={aa}></img>
              <div className="des">
                <h4 className="title is-4"><span className="step-count">2</span>Click On "Get Vedio"</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
              </div>
            </div>
            <div className="item column is-4">

              <img src={aa}></img>

              <div className="des">
                <h4 className="title is-4"><span className="step-count">3</span>Click On "Download Button"</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
              </div>
            </div>
          </div>

        </div>
        <div className="container">
          <div id="ad-slot">
            <ins className="adsbygoogle" style="display:block;" data-ad-client="ca-pub-3226157429955034" data-ad-slot="7059184362"></ins>
            sacasdcadcadc
          </div>
        </div>
      </section>
      <footer>
        <section className="section pd-0"><div className="container"></div></section>

        <section className="section copyright pd-0">
          <div className="container">
            <div className="columns">
              <div className="column pd-0"><div className="copyright-text"><p className="text-center">
                <Link to='/contact'>Contact</Link>&ensp;&ensp;<Link to="/aboutus">Aboutus</Link>
                &ensp;&ensp;<Link to="/term">Terms & Conditions</Link>&ensp;&ensp;<Link to="/privacy">Privacy Policy</Link></p></div></div>
            </div>

            <div className="columns">
              <div className="column pd-0"><div className="copyright-text" >© 2022 <a href="index.html" title="SnapSave">SnapSave</a> 4.0. All rights reserved.</div></div>
            </div>

          </div>
        </section>
      </footer>
    </div>
  )
}

export default Howtouse
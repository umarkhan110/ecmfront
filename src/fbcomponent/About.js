import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import aa from './img/aa.png';
import logo from './img/logo.png'
const About = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div>
                <h1 className="title is-3">About Us</h1>
                <br></br>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. Morbi pulvinar vitae enim in consectetur. Vestibulum iaculis venenatis nunc non molestie. Integer eget viverra lacus. Quisque aliquet felis nec purus condimentum, in ornare eros pulvinar.

                  Nulla facilisi. Nulla in arcu non leo placerat dapibus quis at magna. Duis semper ex at nisi lacinia, at semper velit convallis. Vestibulum lobortis sagittis massa, vitae pellentesque velit ullamcorper vel. Sed eleifend diam ipsum, non malesuada felis pulvinar eget. Cras interdum arcu fermentum imperdiet tristique. Phasellus volutpat interdum odio vel placerat. Curabitur diam metus, tincidunt ut est eget, molestie ultricies erat. Maecenas sagittis congue mauris, sed vestibulum ante porta in.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. Morbi pulvinar vitae enim in consectetur. Vestibulum iaculis venenatis nunc non molestie. Integer eget viverra lacus. Quisque aliquet felis nec purus condimentum, in ornare eros pulvinar.

                  Nulla facilisi. Nulla in arcu non leo placerat dapibus quis at magna. Duis semper ex at nisi lacinia, at semper velit convallis. Vestibulum lobortis sagittis massa, vitae pellentesque velit ullamcorper vel. Sed eleifend diam ipsum, non malesuada felis pulvinar eget. Cras interdum arcu fermentum imperdiet tristique. Phasellus volutpat interdum odio vel placerat. Curabitur diam metus, tincidunt ut est eget, molestie ultricies erat. Maecenas sagittis congue mauris, sed vestibulum ante porta in.
                </p>
              </div>



            </div>
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

export default About
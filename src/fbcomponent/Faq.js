import React from 'react'
import { Link } from 'react-router-dom'
const Faq = () => {
  return (
    <div>
      <section className="section">
        <div className="container" >
          <div className="columns">
            <div className="column">
              <div className="why-heading">
                <br></br><br></br>
                <h3 className="title why-title is-3">Frequently Asked Questions</h3>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div id="faq-accordion" className="accordion">

                <div className="card-faq" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                  <div className="card-header">
                    <h4 className="card-title" itemprop="name">
                      <div className="card-toggle">Lorem Ipsum</div>
                    </h4>
                  </div>
                  <div className="card-collapse collapse" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" id="faq1">
                    <div className="card-body">
                      <p itemprop="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
                    </div>
                  </div>
                </div>
                <div className="card-faq" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                  <div className="card-header">
                    <h4 className="card-title" itemprop="name">
                      <div className="card-toggle">Lorem Ipsum</div>
                    </h4>
                  </div>
                  <div className="card-collapse collapse" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" id="faq2">
                    <div className="card-body">
                      <p itemprop="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
                    </div>
                  </div>
                </div>
                <div className="card-faq" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                  <div className="card-header">
                    <h4 className="card-title" itemprop="name">
                      <div className="card-toggle">Lorem Ipsum</div>
                    </h4>
                  </div>
                  <div className="card-collapse collapse" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" id="faq3">
                    <div className="card-body">
                      <p itemprop="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
                    </div>
                  </div>
                </div>




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

export default Faq;
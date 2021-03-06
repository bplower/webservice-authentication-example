import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap';
import { BuildingsNavbar } from '../components/Navbar.js'
import './Landing.css';

// https://www.kisspng.com/png-high-rise-building-skyscraper-vector-skyscrapers-95811/

class InteractiveGraphic extends Component {
  render () {
    return (
      <div className="jumbotronImg">
        <img src="/buildings_json.png" height="400" withd="400" id="codeImg" alt="building json screenshot" />
        <img src="/buildings_graphic.png" height="400" width="400" id="buildingImg" alt="vector art of building" />
      </div>
    )
  }
}

class PageLanding extends Component {
  render () {
    return (
      <div>
        <BuildingsNavbar />
        <Jumbotron fluid style={{margin: 0}}>
          <Container>
            <div className="row align-items-center">
              <div className="col-6 mx-auto col-md-6 order-md-2 text-md-left">
                <h1><i class="far fa-building" /> BuildingsAPI</h1>
                <p>
                  This project is to exemplify various authentication mechanisms
                  for webservices, including multiple Oauth sources, 2fa, API
                  token generation, and best practices for password storage.
                </p>
                <p>
                  This service operates as a functioning API, representing a
                  typical web service. You can log in with any available Oauth
                  provider or standalone credentials to explore the functionality
                  demonstrated in this project. Sign up to begin exploring, or
                  login with the <strong> Test </strong> account to test with
                  limited account access.
                </p>
              </div>
              <div className="col-6 col-md-6 order-md-2">
                <InteractiveGraphic />
              </div>
            </div>
          </Container>
        </Jumbotron>
        <div className="masthead-followup row m-0 border border-white">
          {/* Oauth providers information card */}
          <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white text-md-left">
            <h3><i class="far fa-address-card" /> Oauth Integration</h3>
            <p>
              This shows examples of integrating Oauth providers into an existing
              standalone authentication mechanism. Current supported Oauth
              providers are: Google, Twitter, Facebook, Github
            </p>
          </div>
          {/* 2fa information card */}
          <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white text-md-left">
            <h3><i class="fas fa-key" /> Password Best Practices</h3>
            <p>
              Password storage is a pain in the ass, and always an interesting
              point of observation during data breaches. Proper password storage
              can minimise damages and liability (?) during breaches.
            </p>
          </div>
          {/* Password storage information */}
          <div className="col-12 col-md-4 p-3 p-md-5 bg-light border border-white text-md-left">
            <h3><i class="fas fa-mobile-alt" /> 2fa Support</h3>
            <p>
              Two factor authentication is increasingly important! This project
              incorporates some best practices about 2fa support.
            </p>
          </div>
        </div>
        <div className="bd-footer text-muted">
          <div className="container-fluid p-3 p-md-5">
            <p>Currently v0.1.0. Code licensed TDB.</p>
          </div>
        </div>
      </div>
    )
  }
}

export { PageLanding }

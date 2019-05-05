import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { apiAuth } from '../api/Auth.js';
import { AuthPanelDisplay } from '../models/Auth.js';

function buildAuthRequest (username, password) {
  return {
    method: 'standard',
    standard: {
      username: username,
      password: password
    }
  }
}

class BuildingsLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: []
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.apiFailure = this.apiFailure.bind(this);
    this.successCallbackWrapper = this.successCallbackWrapper.bind(this);
  }

  successCallbackWrapper (response) {
    // Do some internal state processing if desired
    // Now call the success callback
    this.props.authSuccessCallback(response);
  }

  apiFailure (response) {
    let errorList = this.state.errors
    errorList.push(response)
    this.setState({ errors: errorList })
  }

  formSubmit () {
    console.log("Form submit initiated")
    // Build the buildings api request object
    let bapiRequest = buildAuthRequest(this.state.username, this.state.password)
    // Make the buildings api call
    apiAuth(bapiRequest, this.successCallbackWrapper, this.apiFailure);
  }

  updateUsername (event) {
    this.setState({ username: event.target.value })
  }

  updatePassword (event) {
    this.setState({ password: event.target.value })
  }

  render () {
    let backFn = () => this.props.nav(AuthPanelDisplay.SELECTION)
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Username" onChange={this.updateUsername} tabIndex={1} autoFocus />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" onChange={this.updatePassword} tabIndex={2} />
        </Form.Group>
        <Form.Group style={{overflow: "hidden"}}>
          <Button variant="outline-secondary" onClick={backFn} className="float-left" tabIndex={4}> Cancel </Button>
          <Button variant="primary" className="float-right" tabIndex={3} onClick={this.formSubmit}> Submit </Button>
        </Form.Group>
        <div className="loginErrors">
          {this.state.errors.map( (error, idx) => {
            console.log(error.response)
            return (
              <Alert key={idx} dismissible variant="danger"> { error.response.message } </Alert>
            )
          })}
        </div>
      </Form>
    )
  }
}

export { BuildingsLoginForm }

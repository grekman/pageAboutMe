import React, {Component} from 'react';
import {Row,Col,Input,Icon} from 'react-materialize';

export default class Contacts extends Component {
  render() {
    return(
      <div className="contact">
        <Row>
          <Col l={12} s={12} className="center-align">
            <p> Contact me thought the form, or any of the following social media</p>
          </Col>
        </Row>
        <Row>
          <Col l={4} s={12}>
            <Input s={12} label="First Name" />
            <Input s={12} label="Last Name" />
            <Input s={12} label="Your Message"   />
            <Input s={12} type="email" label="Email" />
          </Col>
          <Col l={4} s={12}>
            <Row>
              <Col>
            <a className="waves-effect waves-light btn-floating btn-large social github">
            <Icon className="fa fa-github  grey darken-3"></Icon> Sign in with github</a>
              </Col>
              <Col>
            <a className="waves-effect waves-light btn-floating btn-large social facebook">
            <Icon className="fa fa-facebook indigo darken-2"></Icon> Sign in with Facebook</a>
            </Col>
            <Col>
            <a className="waves-effect waves-light btn-floating btn-large social linkedin">
            <Icon className="fa fa-linkedin light-blue darken-2"></Icon> Sign in with linkedin</a>
            </Col>
          </Row>
          </Col>
        </Row>
      </div>

    )

  }
}

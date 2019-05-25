import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerPatient } from '../actions';

import {
  Container,
  Card,
  CardBody,
  // CardText,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class RegisterPatient extends Component {
  state = {
    creds: {
      username: '',
      password: '',
      email: '',
      is_child: 0,
      first_name: '',
      last_name: '',
      tel: '',
      avatar: '',
      ss_id: ''
    }
  };

  register = e => {
    e.preventDefault();
    console.log(`------------------seriously, WTF MATE`, this.state.creds);
    console.log(`----------------------------------------WTF MATE`, this.props.registerPatient);
    console.log(`----------------------------------------WTF MATE`, this.state.isRegistering);
    //this.state.isRegistering <----------im not passing this am I
    this.props.registerPatient(this.state.creds).then(() => {
      this.props.history.push({
        pathname: '/patient-login',
        state: {
          username: this.state.creds.username,
          password: this.state.creds.password
        }
      });
    });
  };

  handleChanges = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="new-registration">
        <Container>
          <Card>
            <CardTitle>Welcome! Please register below:</CardTitle>
            <CardSubtitle>
              Create your personal immunization dashboard!
            </CardSubtitle>
            <CardBody>
              <Form onSubmit={this.register}>
                <FormGroup>
                  <Label for="username">Username:</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Please choose a username"
                    onChange={this.handleChanges}
                    value={this.state.creds.username}
                  />
                </FormGroup>
              </Form>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Please choose a password"
                  onChange={this.handleChanges}
                  value={this.state.creds.password}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Please enter your email"
                  onChange={this.handleChanges}
                  value={this.state.creds.email}
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="first_name">First Name:</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  // placeholder=""
                  onChange={this.handleChanges}
                  value={this.state.creds.first_name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="last_name">Last Name:</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  // placeholder=""
                  onChange={this.handleChanges}
                  value={this.state.creds.last_name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="ss_id">
                  Social Security: Patient Authorization
                </Label>
                <Input
                  type="text"
                  name="ss_id"
                  id="username"
                  placeholder="Please enter the last 4 digits of your social security number"
                  onChange={this.handleChanges}
                  value={this.state.creds.ss_id}
                />
              </FormGroup>
              <FormGroup>
                <Label for="tel">Tel:</Label>
                <Input
                  type="tel"
                  name="tel"
                  id="username"
                  placeholder="What is your best contact number?"
                  onChange={this.handleChanges}
                  value={this.state.creds.tel}
                />
              </FormGroup> */}
              {/* <FormGroup>
                <Label for="avatar">Upload your personal avatar:</Label>
                <Input
                  type="text"
                  name="avatar"
                  id="avatar"
                  placeholder="Optional"
                  onChange={this.handleChanges}
                  value={this.state.credentials.avatar}
                />
              </FormGroup> */}
            </CardBody>
            <CardFooter>
              <Button type="submit" onClick={this.register}>
                Create New Profile
              </Button>
            </CardFooter>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapState = state => ({
  isRegistering: state.isRegistering
});

export default connect(
  mapState,
  { registerPatient }
)(RegisterPatient);

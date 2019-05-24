import React, { Component } from 'react';
import { connect } from 'react-redux';
import { patientRegister } from '../actions';

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
    regauth: {
      username: '',
      password: '',
      email: '',
      is_child: 0,
      first_name: '',
      last_name: '',
      phone: '',
      avatar: '',
      ss_id: ''
    }
  };
  render() {
    return (
      <div className="new-registration">
        <Container>
          <Card>
            <CardTitle>Welcome! Please register below:</CardTitle>
            <CardSubtitle>Create your personal immunization dashboard!</CardSubtitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="username">Username:</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Please choose a username"
                  />
                </FormGroup>
              </Form>
              <FormGroup>
                <Label for="username">Password:</Label>
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Please choose a password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Please enter your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">First Name:</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  // placeholder=""
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Last Name:</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  // placeholder=""
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Social Security: Patient Authorization</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Please enter the last 4 digits of your social security number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Tel:</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="What is your best contact number?"
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Upload your personal avatar:</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Optional"
                />
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button>Create New Profile</Button>
            </CardFooter>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isRegistering: state.isRegistering
});

export default connect(
  mapStateToProps,
  { patientRegister }
)(RegisterPatient);

import React from 'react';
// import { connect }

import {
  // eslint-disable-next-line
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button
} from 'reactstrap';

const RegisterPatient = ({ patients }) => {
  return (
    <div>
      <div className="new-registration">
        {patients.map(patient => (
          <Container className='register-new-patient' patient={patient} key={patient.id}>
            <Card>
              <CardTitle>Welcome To The Shit Show</CardTitle>
              <CardSubtitle>Main Dashboard</CardSubtitle>
              <CardBody>
                <CardText>name/ID</CardText>
                <CardText>SS#</CardText>
                <CardText>Phone#</CardText>
                <CardText>avatar image</CardText>
                <CardText>is_kid? (0 | 1)</CardText>
                <CardText>Username</CardText>
                <CardText>PW</CardText>
                <CardText>Email</CardText>
              </CardBody>
              <CardFooter>
                <Button>Kid 1</Button>
                <Button>Kid 2</Button>
              </CardFooter>
            </Card>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default RegisterPatient;

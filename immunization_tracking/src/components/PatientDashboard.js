import React from 'react';

import {
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button
} from 'reactstrap';

function PatientDashboard(props) {
  return (
    <div>
      <div className="patient-info">
        {props.patients.map(patient => (
          <Container>
            <Card>
              <CardTitle>Welcome </CardTitle>
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

export default PatientDashboard;

import React from 'react';

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

const PatientDashboard = ({ patients }) => {
  return (
    <div>
      <div className="patient-info">
        {patients.map(patient => (
          <Container className='patient-dashboard-parent' patient={patient} key={patient.id}>
            <Card>
              <CardTitle>Welcome Name </CardTitle>
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

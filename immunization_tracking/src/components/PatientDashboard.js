import React from 'react';

import { Container, Card, CardBody, CardText, CardTitle, CardSubtitle, CardFooter, Button } from 'reactstrap';

class PatientDashboard extends React.Component {
    render() {
      return (
        <div>
          <Container>
              <Card>
                  <CardTitle>
                      Welcome Name
                  </CardTitle>
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
        </div>
      )
    }
  }

  export default PatientDashboard;
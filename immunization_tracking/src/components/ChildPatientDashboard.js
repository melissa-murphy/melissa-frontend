import React, { Component } from 'react';

import { Container, Card, CardBody, CardText, CardTitle, CardSubtitle, CardFooter, Button } from 'reactstrap';

class ChildPatientDashboard extends Component {
    render() {
      return (
        <div>
          <Container>
              <Card>
                  <CardTitle>
                      Welcome Name, parent of (first name, last name)
                  </CardTitle>
                  <CardSubtitle>(child name)'s' Dashboard</CardSubtitle>
                  <CardBody>
                      <CardText>patients.id/patients.id</CardText>
                      <CardText>patients.ss_id</CardText>
                      <CardText>avatar image</CardText>
                      <CardText>is_kid? (0 | 1)</CardText>
                      <CardText>immunization_records.id</CardText>
                      <CardText>immunization_records.clinic_id</CardText>
                      <CardText>immunization_records.received_date</CardText>
                      <CardText>immunization_records.note</CardText>
                  </CardBody>
                  <CardFooter>
                      <Button>Delete Profile</Button>
                  </CardFooter>
              </Card>
          </Container>
        </div>
      )
    }
  }

  export default ChildPatientDashboard;
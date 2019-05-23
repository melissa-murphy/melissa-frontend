import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';

import { fetchPatients } from '../actions';

import { Button } from 'reactstrap';

// import ChildPatientDashboard from './ChildPatientDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <h1>Immunization Tracker</h1>
          <Router>
            <Button>
              <Link to="/patient-login">Parent/Guardian Login</Link>
            </Button>

            <Route exact path="/patient-login" component={PatientLogin} />
            <Route
              exact
              path="/patient-dashboard"
              component={PatientDashboard}
            />
          </Router>
        </>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchPatients: state.fetchPatients,
    patients: state.patients,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchPatients }
)(App);

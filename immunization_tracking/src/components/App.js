import React, { Component, Link } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import { Route } from 'react-router-dom';

import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';
import { fetchPatients } from '../actions';

// import ChildPatientDashboard from './ChildPatientDashboard';
import { Button } from 'reactstrap';

class App extends Component {
  componentDidMount() {
    console.log(`------------------CDM: fetch patients`);
    this.props.fetchPatients();
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Immunization Tracker</h1>
          <Link to="patient-login">
            <Button>Patient Login</Button>
          </Link>
        </div>

        <Route path="/patient-login" component={PatientLogin} />
        <PrivateRoute
          exact
          path="/patient-dashboard"
          component={props => (
            <PatientDashboard
              {...props}
              patients={this.props.patients}
              // deleteProfile={this.deleteProfile}
            />
          )}
        />
        {/* <PrivateRoute exact path="/add-dependent" component={AddDependent} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients,
    fetchPatients: state.fetchPatients,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchPatients }
)(App);

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';

import { fetchPatients } from '../actions';

// import ChildPatientDashboard from './ChildPatientDashboard';

class App extends Component {
  componentDidMount() {
    console.log(`------------------CDM fired from App`);
    // eslint-disable-next-line
    const token = localStorage.getItem('token');
    if (localStorage.getItem('data')) {
      this.props.getData(JSON.parse(localStorage.getItem('data')));
    }
  }
  render() {
    return (
      <Router>
        <Route path="/patient-login" component={PatientLogin} />
        <Route exact path="/patient-dashboard" component={PatientDashboard} />
      </Router>
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

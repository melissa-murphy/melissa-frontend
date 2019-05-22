import React from 'react';

// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PatientLogin from './PatientLogin';

import { Button } from 'reactstrap';
import PatientDashboard from './PatientDashboard';
import ChildPatientDashboard from './ChildPatientDashboard';

export default function App() {
  return (
    <div className="App">
      <>
        <h1>Immunization Tracker</h1>

        <Button>
          <Link to="/patient-login">Parent/Guardian Login</Link>
        </Button>
        <PatientDashboard />
        <ChildPatientDashboard />
      </>

      <Route path="/patient-login" component={PatientLogin} />
      <Route path="/patient-dashboard" component={PatientDashboard} />
    </div>
  );
}

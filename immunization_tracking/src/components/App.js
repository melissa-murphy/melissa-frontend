import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { connect } from 'react-redux';

import PatientLogin from './PatientLogin';

import { Button } from 'reactstrap';
import PatientDashboard from './PatientDashboard';
// import ChildPatientDashboard from './ChildPatientDashboard';

export default function App() {
  return (
    
    <div className="App">
      <>
        <h1>Immunization Tracker</h1>
        <Router>
        <Button>
          <Link to="/patient-login">Parent/Guardian Login</Link>
        </Button>
        {/* <PatientDashboard />
        <ChildPatientDashboard /> */}


      <Route exact path="/patient-login" component={PatientLogin} />
      <Route exact path="/patient-dashboard" component={PatientDashboard} />
      </Router>
      </>
    </div>
  );
}

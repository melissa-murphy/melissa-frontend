import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import AddUser from './AddUser';
import PatientLogin from './PatientLogin';
import StaffLogin from './StaffLogin';
import UserProfile from './UserProfile';
import PatientProfile from './PatientProfile';


// import '../styles/index.css';

export default function App() {


    return (
      <Router>
<div className='App'>
    <>
    <h1>Immunization Tracker</h1>
    <button>
        <Link to='/patient-login'>Parent/Guardian Login</Link>
    </button>
    <button>
        <Link to='/staff-login'>Clinician Login</Link>
    </button>
    </>
</div>

        <Route path="/patient-login" component={PatientLogin} />
        <Route path="/staff-login" component={StaffLogin} />
        <Route exact path="/add-child" component={AddUser} />
        <PrivateRoute exact path="/dashboard" component={UserProfile} />
        <PrivateRoute exact path="/child-patient/" component={PatientProfile} />
      </Router>
    );
  
}


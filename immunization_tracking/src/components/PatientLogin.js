import React, { Component } from 'react';
import { Input } from 'reactstrap';

class PatientLogin extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log(`--------------current auth state` + this.state.credentials);
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/patient-dashboard');
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <Input
            placeholder="username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>login</button>
        </form>
      </div>
    );
  }
}

export default PatientLogin;

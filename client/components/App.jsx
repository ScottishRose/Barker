import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import UserForm from './users/UserForm.jsx';
import BarkList from './barks/BarkList.jsx';
import BarkForm from './barks/BarkForm.jsx';

const propTypes = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { barks: [] };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.sendBark = this.sendBark.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
    if (cookie.load('token')) {
      this.getCurrentUserBarks();
    }
  }
  getCurrentUserBarks() {
    request.get('/api/barks')
           .then((response) => {
             const barks = response.body;
             this.setState({ barks });
           })
           .catch(() => {
             this.updateAuth();
           });
  }
  sendBark({ body }) {
    request.post('/api/barks')
           .send({ body })
           .then(() => {
             this.getCurrentUserBarks();
           });
  }
  signOut() {
    request.post('/api/signout')
           .then(() => this.updateAuth());
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  logIn(userDetails) {
    request.post('/api/login')
           .send(userDetails)
           .then(() => {
             this.updateAuth();
             this.getCurrentUserBarks();
           });
  }
  signUp(userDetails) {
    request.post('/api/signup')
           .send(userDetails)
           .then(() => {
             this.updateAuth();
             this.getCurrentUserBarks();
           });
  }
  render() {
    let userDisplayElement;
    if (this.state.token) {
      userDisplayElement = (
        <div>
          <button onClick={this.signOut} >LogOut</button>
          <BarkForm sendBark={this.sendBark} />
          <BarkList barks={this.state.barks} />
        </div>
      );
    } else {
      userDisplayElement = (
        <div>
          <UserForm handleSubmit={this.signUp} buttonText="Sign Up" />
          <UserForm handleSubmit={this.logIn} buttonText="Log In" />
        </div>
      );
    }
    return (
      <div>
        {userDisplayElement}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;

import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';

class Login extends Component {

  state = {
    username: ''
  }

  onChange = ({target}) => this.setState({username: target.value})

  handleSubmit = async event => {
    event.preventDefault();
    if (!this.state.username) {
      return;
    }
    try {
      await this.props.handleLogin(this.state.username);
    } catch (error) {
      alert(`Log in failed: ${error.message}`);
      this.setState({
        username: ''
      });
    }
  }

  render() {
    const {authedUser, location} = this.props;
    const from = (location && location.state && location.state.from) || null;
    if (authedUser) {
      return <Redirect to = {from.pathname || '/'}/>;
    }
    return (
        <div style = {{display: 'inline-flex', flexDirection : 'column', padding: '2rem', marginTop: '7.5rem'}}>
          <h2 style = {{margin: '0', marginBottom : '1.5rem'}}>Login</h2>
          <form onSubmit = {this.handleSubmit}>
            <input
              onChange = {this.onChange}
              type = "text"
              id = "username"
              name = "username"
              placeholder = "Username"
              style = {{
                padding: '8px',
                margin: '0 5px 1rem 1rem',
                borderRadius: '2px'
              }}
              value= {this.state.username}
            />
            <button style = {{padding: '8px'}} type = "submit">Login</button>
          </form>
          <Link
            to = {{
              pathname: '/register',
              state: {from}
            }}
          >No account? Click here to sign up</Link>
        </div>
    );
  }
}

export default Login;
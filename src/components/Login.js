import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'

class Login extends Component {

  state = {
    username: ''
  }

  onChange = ({target}) => this.setState({username: target.value})

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleLogin(this.state.username);
    this.setState({
      username: ''
    })
  }

  render() {
    const {authedUser, location} = this.props;
    if (authedUser) {
      return <Redirect to = {location.state ? location.state.from.pathname : "/"}/>
    }
    return (
        <div style = {{display: 'inline-flex', flexDirection : 'column', padding: '2rem', margin: '1.5rem'}}>
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
            />
            <button style = {{padding: '8px'}} type = "submit">Login</button>
          </form>
          <Link to = {{
            pathname: "/register",
            state: {
              from: location.state && location.state.from.pathname} 
            }}
          >No account? Click here to sign up</Link>
        </div>
    )
  }
}

export default Login
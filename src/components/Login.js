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
    const {authedUser} = this.props;
    if (authedUser) {
      return <Redirect to = "/"/>
    }
    return (
        <div style = {{display: 'inline-flex', flexDirection : 'column', border: 'solid 1px', padding: '2rem', margin: '1.5rem'}}>
          <h2 style = {{margin: 0}}>Login</h2>
          <form onSubmit = {this.handleSubmit}>
            <input onChange = {this.onChange} style = {{padding: '8px'}} type = "text" id = "username" name = "username" placeholder = "Username"/>
            <div>
              <button type = "submit">Login</button>
              
            </div>
          </form>
          <Link to = '/register'>No account? Click here to sign up</Link>
        </div>
    )
  }
}

export default Login
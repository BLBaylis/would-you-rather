import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'

class Register extends Component {

  state = {
    username: '',
    name: ''
  }

  onChange = ({ target }) => this.setState({[target.name]: target.value})

  handleSubmit = event => {
    event.preventDefault()
    const {username, name} = this.state
    this.props.handleRegister(username, name);
    this.setState({
      username: '',
      name: ''
    })
  }

  render() {
    const {authedUser, location} = this.props;
    if (authedUser) {
      return <Redirect to = {location.state.from.pathname || "/"}/>
    }
    return (
        <div style = {{display: 'inline-flex', flexDirection : 'column', border: 'solid 1px', padding: '2rem', margin: '1.5rem'}}>
          <h2 style = {{margin: 0}}>Register</h2>
          <form onSubmit = {this.handleSubmit}>
            <input onChange = {this.onChange} style = {{padding: '8px'}} type = "text" id = "username" name = "username" placeholder = "Username"/>
            <input onChange = {this.onChange} style = {{padding: '8px'}} type = "text" id = "name" name = "name" placeholder = "Name"/>
            <div>
              <button type = "submit">Register</button>
            </div>
          </form>
          <Link to = '/login'>Already have an account? Click here to log in</Link>
        </div>
    )
  }
}

export default Register
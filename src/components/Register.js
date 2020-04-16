import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'

class Register extends Component {

  state = {
    username: '',
    name: '',

  }

  onChange = ({ target }) => this.setState({[target.name]: target.value})

  handleSubmit = event => {
    event.preventDefault()
    const {username, name} = this.state
    this.props.handleRegister(username, name);
    this.setState({
      username: '',
      name: '',

    })
  }

  render() {
    const {authedUser, location} = this.props;
    console.log('register', location)
    if (authedUser) {
      return <Redirect to = {location.state.from || "/"}/>
    }
    return (
        <div style = {{display: 'inline-flex', flexDirection : 'column', padding: '2rem', margin: '1.5rem'}}>
          <h2 style = {{margin: 0, marginBottom : '1.5rem'}}>Register</h2>
          <form onSubmit = {this.handleSubmit}>
            <input 
              onChange = {this.onChange} 
              style = {{
                padding: '8px', 
                margin: '0 5px 1rem 1rem',
                borderRadius: '2px'
              }} 
              type = "text" 
              id = "username" 
              name = "username" 
              placeholder = "Username"
            />
            <input 
              onChange = {this.onChange} 
              style = {{
                padding: '8px', 
                margin: '0 5px 1rem 1rem',
                borderRadius: '2px'
              }} 
              type = "text" 
              id = "name" 
              name = "name" 
              placeholder = "Name"
            />
            <button style = {{padding: '8px', marginLeft: '1rem'}} type = "submit">Register</button>
          </form>
          <Link to = '/login'>Already have an account? Click here to log in</Link>
        </div>
    )
  }
}

export default Register
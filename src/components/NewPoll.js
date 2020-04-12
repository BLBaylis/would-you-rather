import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleNewPollCreation } from "../actions";

class NewPoll extends Component {

  state = {
    optionOne: '',
    optionTwo: ''
  }

  onChange = event => this.setState({[event.target.name]: event.target.value})

  handleSubmit = event => {
    event.preventDefault()
    const {optionOne, optionTwo} = this.state
    this.props.handleNewPollCreation(this.props.authedUser, optionOne, optionTwo)
    this.setState({
      optionOne: '',
      optionTwo: ''
    })
  }

  render() {
    return (
      <div style = {{display: 'inline-flex', flexDirection : 'column', border: 'solid 1px', padding: '2rem', margin: '1.5rem'}}>
          <h2 style = {{margin: 0}}>Submit new question</h2>
          <form onSubmit = {this.handleSubmit}>
            <h3>Would you rather...</h3>
            <textarea onChange = {this.onChange} style = {{padding: '8px'}} type = "text" id = "optionOne" name = "optionOne" placeholder = "Write option one"/>
            <p><strong>or</strong></p>
            <textarea onChange = {this.onChange} style = {{padding: '8px'}} type = "text" id = "optionTwo" name = "optionTwo" placeholder = "Write option two"/>
            <div>
              <button type = "submit">Post Question</button>
            </div>
          </form>
        </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps, {handleNewPollCreation})(NewPoll)
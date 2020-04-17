import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { handleNewPollCreation } from "../actions";
import Page from '../components/Page'
import PrimaryButton from '../components/PrimaryButton'

class NewPoll extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  onChange = event => this.setState({[event.target.name]: event.target.value})

  handleSubmit = async event => {
    event.preventDefault()
    const {optionOne, optionTwo} = this.state
    if (!optionOne || !optionTwo) {
      return alert('Submission failed: Please fill in all fields')
    }
    try {
      await this.props.handleNewPollCreation(this.props.authedUser, optionOne, optionTwo)
      this.setState({toHome: true})
    } catch (error) {
      alert(`Submission failed: ${error.message}`)
      this.setState({optionOne: '', optionTwo: ''})
    }
    
  }

  render() {
    if (this.state.toHome) {
      return <Redirect to = "/" />
    }
    return (
      <div style = {{ marginTop: '7.5rem', display: 'inline-flex', flexDirection: 'column'}}>
        <h2 style = {{margin: 0, marginBottom : '1.5rem'}}>Submit new question</h2>
        <h3 style = {{margin: 0}}>Would you rather...</h3>
        <form onSubmit = {this.handleSubmit}>
          <div style = {{display: 'flex', alignItems: 'center'}}>
            <textarea 
              onChange = {this.onChange} 
              type = "text" 
              id = "optionOne" 
              name = "optionOne" 
              placeholder = "Option one"
              value = {this.state.optionOne}
              style = {{
                padding: '8px', 
                margin: '1.5rem',
                marginLeft: 0,
                borderRadius: '2px'
              }}
            />
            <p><strong>or</strong></p>
            <textarea 
              onChange = {this.onChange} 
              type = "text" 
              id = "optionTwo" 
              name = "optionTwo" 
              placeholder = "Option two"
              value = {this.state.optionTwo}
              style = {{
                padding: '8px', 
                margin: '1.5rem',
                marginRight: 0,
                borderRadius: '2px'
              }}
            />
          </div>
          <div style = {{maxWidth: '600px'}}>
            <PrimaryButton type = 'submit' styles = {{ width: '100%'}}>Post Question</PrimaryButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

const ConnectedNewPoll = connect(mapStateToProps, {handleNewPollCreation})(NewPoll)

export default props => <Page><ConnectedNewPoll {...props}/></Page>
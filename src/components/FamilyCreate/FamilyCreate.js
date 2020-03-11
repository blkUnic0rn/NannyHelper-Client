import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import FamilyForm from '../FamilyForm'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

class FamilyCreate extends Component {
  constructor () {
    super()

    this.state = {
      family: {
        familyName: '',
        parentOneName: '',
        parentTwoName: '',
        numberOfKids: '',
        city: '',
        state: ''
      },
      createdFamilyId: null
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedFamily = Object.assign(this.state.family, updatedField)

    this.setState({ family: editedFamily })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/families`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      },
      data: { family: this.state.family }
    })
      .then(res => this.setState({ createdFamilyId: res.data.family.id }))
      .then(() => this.props.msgAlert({
        heading: 'Created Family Successfully',
        message: messages.createFamilySuccess,
        variant: 'success'
      }))
      .catch(error =>
        this.props.msgAlert({
          heading: 'Create Family Failed with error: ' + error.message,
          message: messages.createFamilyFailure,
          variant: 'danger'
        })
      )
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { createdFamilyId, family } = this.state

    if (createdFamilyId) {
      return <Redirect to={`/families/${createdFamilyId}`} />
    }

    return (
      <FamilyForm
        family={family}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/families" />
    )
  }
}

export default withRouter(FamilyCreate)

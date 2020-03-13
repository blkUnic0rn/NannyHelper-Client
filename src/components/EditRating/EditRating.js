import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import RatingForm from '../RatingForm'
import messages from '../AutoDismissAlert/messages'

class EditRating extends Component {
  constructor () {
    super()

    this.state = {
      rating: {
        happiness: 1,
        honesty: 1,
        reliability: 1,
        consistency: 1,
        respect: 1,
        benefits: 1,
        kids: 1,
        safetyAndComfort: 1,
        pay: 1,
        workAgain: '',
        repuation: 1,
        url: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/ratings/${this.props.match.params.id}`)
      .then(res => this.setState(res.data.rating))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedRating = Object.assign(this.state.rating, updatedField)

    this.setState({ rating: editedRating })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/ratings/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      },
      data: { rating: this.state.rating }
    })
      .then(() => this.setState({ updated: true }))
      .then(() => this.props.msgAlert({
        heading: 'Edit Rating Success',
        message: messages.editRatingSuccess,
        variant: 'success'
      }))
      .catch(error => {
        this.props.msgAlert({
          heading: 'Edit Rating Failed with error: ' + error.message,
          message: messages.editRatingFailure,
          variant: 'danger'
        })
      })
  }
  render () {
    const { rating } = this.state
    if (this.state.updated) {
      return <Redirect to={`/ratings/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <RatingForm
          rating={rating}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancelPath={`/ratings/${this.props.match.params.id}`}
        />
      </div>
    )
  }
}

export default EditRating

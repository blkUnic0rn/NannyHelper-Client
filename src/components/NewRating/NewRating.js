import React, { Component } from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import { Link, Redirect } from 'react-router-dom'

class RatingForm extends Component {
  constructor () {
    super()

    this.state = {
      redirect: false,
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
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    const { msgAlert } = this.props

    const { user } = this.props
    axios({
      url: `${apiUrl}/ratings`,
      method: 'POST',
      data: {
        'rating': {
          'happiness': this.state.happiness,
          'honesty': this.state.honesty,
          'reliability': this.state.reliability,
          'consistency': this.state.consistency,
          'respect': this.state.respect,
          'benefits': this.state.benefits,
          'kids': this.state.kids,
          'safetyAndComfort': this.state.safetyAndComfort,
          'pay': this.state.pay,
          'workAgain': this.state.workAgain,
          'reputation': this.state.reputation,
          'url': this.state.url,
          'family_id': this.props.match.params.id,
          'user_id': user.id
        }
      }
    })
      .then(() => msgAlert({
        heading: 'Created Rating Successfully',
        message: messages.createRatingSuccess,
        variant: 'success'
      }))
      .then(() => this.setState({ redirect: true }))
      .catch(error => {
        msgAlert({
          heading: 'Create Rating Failed with error: ' + error.message,
          message: messages.createRatingFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { happiness, honesty, reliability, consistency, respect, benefits,
      kids, safetyAndComfort, pay, workAgain, repuation, url, redirect } = this.state

    if (redirect) {
      return (
        <Redirect to='/families' />
      )
    }
    return (
      <div className='row'>
        <div className="col-sm-10 cold-md-8 mx-auto mt-5">
          <h3> Create A New Rating </h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='happiness'>
              <Form.Label>Happiness </Form.Label>
              <p> On a Scale of 1 - 5, how happy were you with the family? </p>
              <Form.Control as="select"
                value={happiness}
                name='happiness'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='honesty'>
              <Form.Label>Honesty </Form.Label>
              <p> On a Scale of 1 - 5, how honest were they you? Could you trust them? </p>
              <Form.Control as="select"
                value={honesty}
                name='honesty'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='reliability'>
              <Form.Label>Reliability </Form.Label>
              <p> On a Scale of 1 - 5, how reliability was the family? </p>
              <Form.Control as="select"
                value={reliability}
                name='reliability'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='consistency'>
              <Form.Label>Consistency </Form.Label>
              <p> On a Scale of 1 - 5, Were they consistent? Did they cancel on you a lot? </p>
              <Form.Control as="select"
                value={consistency}
                name='consistency'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='respect'>
              <Form.Label>Respect </Form.Label>
              <p> On a Scale of 1 - 5, did they respect you? Did they go against you in front of the kids? </p>
              <Form.Control as="select"
                value={respect}
                name='respect'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='benefits'>
              <Form.Label>Benefits </Form.Label>
              <p> On a Scale of 1 - 5, did you have resonable benefits? Sick time, vacation time, holidays? </p>
              <Form.Control as="select"
                value={benefits}
                name='benefits'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='kids'>
              <Form.Label>Kids </Form.Label>
              <p> On a Scale of 1 - 5, how well behaved were the kids? Were they easy or difficult? </p> <br />
              <Form.Control as="select"
                value={kids}
                name='kids'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='safetyAndComfort'>
              <Form.Label>Safety and Comfort </Form.Label>
              <p> On a Scale of 1 - 5, did you feel safe working for them? Were yuo over worked? </p>
              <Form.Control as="select"
                value={safetyAndComfort}
                name='safetyAndComfort'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='pay'>
              <Form.Label>Pay </Form.Label>
              <p> On a Scale of 1 - 5, were you payed on time (if at all)? were you payed for holidays/vactions? were you payed according to your qualifications and experience </p>
              <Form.Control as="select"
                value={pay}
                name='pay'
                required
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='workAgin'>
              <Form.Label>Would you work for them Again? </Form.Label>
              <Form.Control as="select"
                placeholder="yes or no"
                value={workAgain}
                name="workAgain"
                required
                onChange={this.handleChange}
              >
                <option>yes</option>
                <option>no</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='reputation'>
              <Form.Label>Reputation </Form.Label>
              <p> On a Scale of 1 - 5, were they a good family? did they have a bad/good repuation in the neighborhood? </p>
              <Form.Control as="select"
                value={repuation}
                name='repuation'
                required
                placeholder=''
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='url'>
              <Form.Label>Please insert care profile of family (if available) </Form.Label>
              <Form.Control
                type="text"
                placeholder="care.com, sittercity.com..etc"
                value={url}
                name="url"
                onChange={this.handleChange}
              />
            </Form.Group>

            <button className='submit' type="submit">Submit</button>
          </Form>
          <Link to="/ratings" >
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default RatingForm

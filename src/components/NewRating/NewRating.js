import React, { Component } from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class RatingForm extends Component {
  constructor () {
    super()

    this.state = {
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

    const { user } = this.props
    console.log(user)
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
  }

  render () {
    const { happiness, honesty, reliability, consistency, respect, benefits,
      kids, safetyAndComfort, pay, workAgain, repuation, url } = this.state
    return (
      <div className='row'>
        <div className="col-sm-10 cold-md-8 mx-auto mt-5">
          <h3> Create a New Rating </h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='happiness'>
              <Form.Label>Happiness </Form.Label>
              <p> On a Scale of 1 - 5, how happy were you with the family? </p>
              <Form.Control as="select"
                value={happiness}
                name='happiness'
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
              <p> On a Scale of 1 - 5, how honest were they you? Could you trust them? </p> <br />
              <Form.Control as="select"
                value={honesty}
                name='honesty'
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
              <p> On a Scale of 1 - 5, Were they consistent? Did they cancel on you a lot? </p> <br />
              <Form.Control as="select"
                value={consistency}
                name='consistency'
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
              <p> On a Scale of 1 - 5, did they respect you? Did they go against you in front of the kids? </p> <br />
              <Form.Control as="select"
                value={respect}
                name='respect'
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
              <p> On a Scale of 1 - 5, did you have resonable benefits? Sick time, vacation time, holidays? </p> <br />
              <Form.Control as="select"
                value={benefits}
                name='benefits'
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
              <p> On a Scale of 1 - 5, did you feel safe working for them? Were yuo over worked? </p> <br />
              <Form.Control as="select"
                value={safetyAndComfort}
                name='safetyAndComfort'
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
              <p> On a Scale of 1 - 5, were you payed on time (if at all)? were you payed for holidays/vactions? were you payed according to your qualifications and experience </p> <br />
              <Form.Control as="select"
                value={pay}
                name='pay'
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
                onChange={this.handleChange}
              >
                <option>yes</option>
                <option>no</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='reputation'>
              <Form.Label>Reputation </Form.Label>
              <p> On a Scale of 1 - 5, were they a good family? did they have a bad/good repuation in the neighborhood? </p> <br />
              <Form.Control as="select"
                value={repuation}
                name='repuation'
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

            <Button varitent="primary" type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default RatingForm

import React from 'react'

import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

const RatingForm = ({ rating, handleSubmit, handleChange, cancelPath }) => (
  <div className='row'>
    <div className="col-sm-10 cold-md-8 mx-auto mt-5">
      <h3> Update Rating </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='happiness'>
          <Form.Label>Happiness </Form.Label>
          <p> On a Scale of 1 - 5, how happy were you with the family? </p>
          <Form.Control as="select"
            value={rating.happiness}
            name='happiness'
            required
            onChange={handleChange}
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
            value={rating.honesty}
            name='honesty'
            required
            onChange={handleChange}
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
            value={rating.reliability}
            name='reliability'
            required
            onChange={handleChange}
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
            value={rating.consistency}
            name='consistency'
            required
            onChange={handleChange}
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
            value={rating.respect}
            name='respect'
            required
            onChange={handleChange}
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
            value={rating.benefits}
            name='benefits'
            required
            onChange={handleChange}
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
            value={rating.kids}
            name='kids'
            required
            onChange={handleChange}
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
            value={rating.safetyAndComfort}
            name='safetyAndComfort'
            required
            onChange={handleChange}
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
            value={rating.pay}
            name='pay'
            required
            onChange={handleChange}
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
            value={rating.workAgain}
            name="workAgain"
            required
            onChange={handleChange}
          >
            <option>yes</option>
            <option>no</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='reputation'>
          <Form.Label>Reputation </Form.Label>
          <p> On a Scale of 1 - 5, were they a good family? did they have a bad/good repuation in the neighborhood? </p> <br />
          <Form.Control as="select"
            value={rating.repuation}
            name='repuation'
            required
            placeholder=''
            onChange={handleChange}
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
            value={rating.url}
            name="url"
            onChange={handleChange}
          />
        </Form.Group>
        <button className='submit' type="submit">Submit</button>
      </Form>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </div>
  </div>
)

export default RatingForm

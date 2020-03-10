import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FamilyForm = ({ family, handleSubmit, handleChange, cancelPath }) => (
  <div className='row'>
    <div className="col-sm-10 cold-md-8 mx-auto mt-5">
      <h3> Create a New Family </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='last name'>
          <Form.Label>Last Name</Form.Label>
          <input
            placeholder="Doe"
            value={family.familyName}
            name="family Name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='parent one name'>
          <Form.Label>Parent One Name</Form.Label>
          <input
            placeholder="John"
            value={family.parentOneName}
            name="parentOneName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='parent two name'>
          <Form.Label>Parent Two Name</Form.Label>
          <input
            placeholder="Jane"
            value={family.parentTwoName}
            name="parentTwoName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='Number of kids'>
          <Form.Label>Number of Kids</Form.Label>
          <input
            placeholder="3"
            value={family.numberOfKids}
            name="numberOfKids"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <input
            placeholder="Boston"
            value={family.city}
            name="city"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='state'>
          <Form.Label>State</Form.Label>
          <input
            placeholder="Massachusetts"
            value={family.state}
            name="state"
            onChange={handleChange}
          />
        </Form.Group>

        <Button varitent="primary" type="submit">Submit</Button>
        <Link to={cancelPath}>
          <Button>Cancel</Button>
        </Link>
      </Form>
    </div>
  </div>
)

export default FamilyForm

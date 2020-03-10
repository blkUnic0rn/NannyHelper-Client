import React from 'react'
import { Link } from 'react-router-dom'

const FamilyForm = ({ family, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Last Name</label>
    <input
      placeholder="Doe"
      value={family.familyName}
      name="family Name"
      onChange={handleChange}
    />

    <label>Parent One Name</label>
    <input
      placeholder="John"
      value={family.parentOneName}
      name="parent One Name"
      onChange={handleChange}
    />

    <label>Parent Two Name</label>
    <input
      placeholder="Jane"
      value={family.parentTwoName}
      name="parent Two Name"
      onChange={handleChange}
    />

    <label>Number of Kids</label>
    <input
      placeholder="3"
      value={family.numberOfKids}
      name="number of kids"
      onChange={handleChange}
    />

    <label>City</label>
    <input
      placeholder="Boston"
      value={family.city}
      name="city"
      onChange={handleChange}
    />

    <label>State</label>
    <input
      placeholder="Massachusetts"
      value={family.state}
      name="state"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default FamilyForm

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

import Ratings from '../Ratings/Ratings'

import apiUrl from '../../apiConfig'

const Family = props => {
  const [family, setFamily] = useState(null)
  const [ratings, setRatings] = useState(null)
  const [showRatings, setShowRatings] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/families/${props.match.params.id}`)
      .then(res => setFamily(res.data.family))
      .catch(console.error)
  }, [])

  useEffect(() => {
    axios(`${apiUrl}/ratings`)
      .then(res => setRatings(res.data.ratings))
      .catch(console.error)
  }, [])

  const onShowRatings = () => {
    if (ratings) {
      setShowRatings(true)
    } else {
      return (
        <Spinner animation="border" variant="success" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
  }

  if (!family) {
    return (
      <Spinner animation="border" variant="success" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  const name = family.familyName

  return (
    <div>
      <h4>{family.familyName}, {family.numberOfKids} kids</h4>
      <h5>{family.parentOneName} {family.familyName}, {family.city}, {family.state}</h5><br />
      {showRatings && <Ratings name={name} />}
      <div className='family-button-center'>
        <button onClick={onShowRatings}>Show Ratings</button>
        <Link to={`/families/${props.match.params.id}/rate`}>
          <button> New Rating </button>
        </Link>
        <Link to="/families">
          <button> Back to Families </button>
        </Link>
      </div>
    </div>
  )
}

export default Family

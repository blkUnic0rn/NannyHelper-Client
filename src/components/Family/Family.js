import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
      return <p> Loading...</p>
    }
  }

  if (!family) {
    return <p>Loading...</p>
  }
  const name = family.familyName

  return (
    <div>
      <h4>{family.familyName}</h4>
      {showRatings && <Ratings name={name} />}
      <button onClick={onShowRatings}>Show Ratings</button>
      <Link to={`/families/${props.match.params.id}/rate`}>
        <button> New Rating </button>
      </Link>
      <Link to="/families">Back to all families</Link>
    </div>
  )
}

export default Family

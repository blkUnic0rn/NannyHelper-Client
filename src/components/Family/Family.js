import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Family = props => {
  const [family, setFamily] = useState(null)
  const [ratings, setRatings] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/families/${props.match.params.id}`)
      .then(res => setFamily(res.data.family))
      .catch(console.error)
  }, [])

  const onShowRatings = () => {
    axios(`${apiUrl}/ratings`)
      .then(res => setRatings(res.data.ratings))
      .then(() => console.log(ratings))
      .catch(console.error)

    // const ratingsList = ratings.map(rating => (
    //   <li key={rating.id}>
    //     happiness = {rating.happiness}
    //   </li>
    // ))

    return (
      <ol>
        <h1> hi </h1>
      </ol>
    )
  }

  if (!family) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h4>{family.familyName}</h4>
      <button onClick={onShowRatings}>Show Ratings</button>
      <Link to="/families">Back to all families</Link>
    </div>
  )
}

export default Family

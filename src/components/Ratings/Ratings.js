import React, { useState, useEffect } from 'react'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Ratings = props => {
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/ratings`)
      .then(res => setRatings(res.data.ratings))
      .catch(console.error)
  }, [])

  const ratingsList = ratings.map(rating => (
    <li key={rating.id}>
      {rating.happiness}
      {rating.honesty}
      {rating.reliability}
      {rating.consistency}
      {rating.respect}
      {rating.benefits}
      {rating.kids}
      {rating.safetyAndComfort}
      {rating.pay}
      {rating.workAgain}
      {rating.reputation}
      {rating.url}
    </li>
  ))

  return (
    <div>
      <h4>Ratings</h4>
      <ul>
        {ratingsList}
      </ul>
    </div>
  )
}

export default Ratings

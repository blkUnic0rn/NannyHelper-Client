import React, { useState, useEffect } from 'react'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Ratings = ({ props, name }) => {
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/ratings`)
      .then(res => setRatings(res.data.ratings))
      .catch(console.error)
  }, [])

  return (
    <div>
      <h5>Ratings</h5>
      <ul>
        {ratings.filter(rating => rating.family.familyName === name).map(rating => (
          <li key={rating.id}>
            <p> Happiness: {rating.happiness}</p>
            <p> Honesty: {rating.honesty}</p>
            <p> Reliability: {rating.reliability}</p>
            <p> Consistency: {rating.consistency}</p>
            <p> Respect: {rating.respect}</p>
            <p> Benefits: {rating.benefits}</p>
            <p> Kids: {rating.kids}</p>
            <p> Safety and Comfort: {rating.safetyAndComfort}</p>
            <p> Pay: {rating.pay}</p>
            <p> Would They Work There Again? {rating.workAgain}</p>
            <p> Reputation: {rating.reputation}</p>
            <p> Url: {rating.url}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ratings

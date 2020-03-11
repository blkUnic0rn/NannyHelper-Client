import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

import apiUrl from '../../apiConfig'

const Rating = props => {
  const [rating, setRating] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/ratings/${props.match.params.id}`)
      .then(res => setRating(res.data.rating))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/ratings/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!rating) {
    return (
      <Spinner animation="border" variant="success" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  if (deleted) {
    return <Redirect to={'/ratings'} />
  }

  return (
    <div className='single-ratingDiv'>
      <h4>{rating.family.familyName}, {rating.family.numberOfKids} kids</h4>
      <h5>{rating.family.parentOneName} {rating.family.familyName}, {rating.family.city}, {rating.family.state}</h5><br />
      <div className='single-rating'>
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
        <p> Url: {rating.url}</p> <br />
      </div>
      <div className='button-area'>
        <button onClick={destroy}>Delete Rating</button>
        <Link to={`/ratings/${props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  )
}

export default Rating

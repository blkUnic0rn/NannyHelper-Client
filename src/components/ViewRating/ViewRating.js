import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

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
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={'/ratings'} />
  }

  return (
    <div>
      <h4>{rating.family.familyName}</h4>
      <button onClick={destroy}>Delete Movie</button>
      <Link to={`/ratings/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}

export default Rating

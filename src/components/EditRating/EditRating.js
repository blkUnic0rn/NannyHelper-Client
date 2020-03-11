import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import RatingForm from '../RatingForm'

const EditRating = props => {
  const [rating, setRating] = useState({
    happiness: 1,
    honesty: 1,
    reliability: 1,
    consistency: 1,
    respect: 1,
    benefits: 1,
    kids: 1,
    safetyAndComfort: 1,
    pay: 1,
    workAgain: '',
    repuation: 1,
    url: ''
  })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/ratings/${props.match.params.id}`)
      .then(res => setRating(res.data.rating))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setRating(rating => ({ ...rating, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/ratings/${props.match.params.id}`,
      method: 'PATCH',
      data: { rating }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/ratings/${props.match.params.id}`} />
  }

  return (
    <div>
      <RatingForm
        rating={rating}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/ratings/${props.match.params.id}`}
      />
    </div>
  )
}

export default EditRating

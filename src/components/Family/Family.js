import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Family = props => {
  const [family, setFamily] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/families/${props.match.params.id}`)
      .then(res => setFamily(res.data.family))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/families/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!family) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Family succesfully deleted!' } }
    } />
  }

  return (
    <div>
      <h4>{family.familyName}</h4>
      <button onClick={destroy}>Delete Family</button>
      <Link to={`/families/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/movies">Back to all families</Link>
    </div>
  )
}

export default Family

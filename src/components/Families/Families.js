import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Families = props => {
  const [families, setFamilies] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/families`)
      .then(res => setFamilies(res.data.families))
      .catch(console.error)
  })

  const familiesList = families.map(family => (
    <li key={family.id}>
      <Link to={`/families/${family.id}`}>{family.familyName}</Link>
    </li>
  ))

  return (
    <div>
      <h4>Families</h4>
      <ul>
        {familiesList}
      </ul>
    </div>
  )
}

export default Families

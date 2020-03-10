import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import FamilyForm from '../FamilyForm'
import apiUrl from '../../apiConfig'
import Layout from '../Layout'

const FamilyCreate = props => {
  const [family, setFamily] = useState({ familyName: '', parentOneName: '', parentTwoName: '', numberOfKids: '', city: '', state: '' })
  const [createdFamilyId, setCreatedFamilyId] = useState(null)

  const handleChange = event => {
    event.persist()
    setFamily(family => ({ ...family, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/families`,
      method: 'POST',
      data: { family }
    })
      .then(res => setCreatedFamilyId(res.data.family.id))
      .catch(console.error)
  }

  if (createdFamilyId) {
    return <Redirect to={`/families/${createdFamilyId}`} />
  }

  return (
    <Layout>
      <FamilyForm
        family={family}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/" />
    </Layout>
  )
}

export default FamilyCreate

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import StatsChart from '../StatsChart/StatsChart'

import Ratings from '../Ratings/Ratings'

import apiUrl from '../../apiConfig'

const Family = props => {
  const [family, setFamily] = useState(null)
  const [ratings, setRatings] = useState(null)
  const [showRatings, setShowRatings] = useState(false)
  const [happinessArray, setHappiness] = useState([])
  const [honestyArray, setHonesty] = useState([])
  const [reliabilityArray, setReliability] = useState([])
  const [consistencyArray, setConsistency] = useState([])
  const [respectArray, setRespect] = useState([])
  const [benefitsArray, setBenefits] = useState([])
  const [kidsArray, setKids] = useState([])
  const [safetyArray, setSafety] = useState([])
  const [payArray, setPay] = useState([])
  const [reputationArray, setReputation] = useState([])
  const [showChart, setShowChart] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/families/${props.match.params.id}`)
      .then(res => setFamily(res.data.family))
      .catch(console.error)
  }, [])

  useEffect(() => {
    axios(`${apiUrl}/ratings`)
      .then(res => setRatings(res.data.ratings))
      .then(() => splitRatings)
      .then(setShowChart(true))
      .catch(console.error)
  }, [])

  const onShowRatings = () => {
    if (ratings) {
      setShowRatings(true)
    } else {
      return (
        <Spinner animation="border" variant="success" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
  }

  if (!family) {
    return (
      <Spinner animation="border" variant="success" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  const name = family.familyName

  const splitRatings = () => {
    const happiness = []
    const honesty = []
    const reliability = []
    const consistency = []
    const respect = []
    const benefits = []
    const kids = []
    const safetyAndComfort = []
    const pay = []
    const reputation = []

    ratings.forEach(rating => (
      happiness.push(parseInt(rating.happiness)) &&
      honesty.push(parseInt(rating.honesty)) &&
      reliability.push(parseInt(rating.reliability)) &&
      consistency.push(parseInt(rating.consistency)) &&
      respect.push(parseInt(rating.respect)) &&
      benefits.push(parseInt(rating.benefits)) &&
      kids.push(parseInt(rating.kids)) &&
      safetyAndComfort.push(parseInt(rating.safetyAndComfort)) &&
      pay.push(parseInt(rating.pay)) &&
      reputation.push(parseInt(rating.reputation))
    ))

    setHappiness(happiness)
    setHonesty(honesty)
    setReliability(reliability)
    setConsistency(consistency)
    setRespect(respect)
    setBenefits(benefits)
    setKids(kids)
    setSafety(safetyAndComfort)
    setPay(pay)
    setReputation(reputation)
    checkAverages()
  }

  let happinessAverage = 0
  let honestyAverage = 0
  let reliabilityAverage = 0
  let consistencyAverage = 0
  let respectAverage = 0
  let benefitsAverage = 0
  let kidsAverage = 0
  let safetyAndComfortAverage = 0
  let payAverage = 0
  let reputationAverage = 0

  const checkAverages = () => {
    happinessArray.forEach(num => (happinessAverage += num))
    honestyArray.forEach(num => (honestyAverage += num))
    reliabilityArray.forEach(num => (reliabilityAverage += num))
    consistencyArray.forEach(num => (consistencyAverage += num))
    respectArray.forEach(num => (respectAverage += num))
    benefitsArray.forEach(num => (benefitsAverage += num))
    kidsArray.forEach(num => (kidsAverage += num))
    safetyArray.forEach(num => (safetyAndComfortAverage += num))
    payArray.forEach(num => (payAverage += num))
    reputationArray.forEach(num => (reputationAverage += num))
    console.log(happinessAverage)
  }

  const data = [
    { 'id': 'happiness', 'label': 'happiness', 'value': happinessAverage, 'color': 'hsl(39, 70%, 50%)' },
    { 'id': 'honesty', 'label': 'honesty', 'value': honestyAverage, 'color': 'hsl(287, 70%, 50%)' },
    { 'id': 'reliability', 'label': 'reliability', 'value': reliabilityAverage, 'color': 'hsl(247, 70%, 50%)' },
    { 'id': 'consistency', 'label': 'consistency', 'value': consistencyAverage, 'color': 'hsl(84, 70%, 50%)' },
    { 'id': 'respect', 'label': 'respect', 'value': respectAverage, 'color': 'hsl(307, 70%, 50%)' },
    { 'id': 'benefits', 'label': 'benefits', 'value': benefitsAverage, 'color': 'hsl(39, 70%, 50%)' },
    { 'id': 'kids', 'label': 'kids', 'value': kidsAverage, 'color': 'hsl(287, 70%, 50%)' },
    { 'id': 'safety', 'label': 'safety', 'value': safetyAndComfortAverage, 'color': 'hsl(247, 70%, 50%)' },
    { 'id': 'pay', 'label': 'pay', 'value': payAverage, 'color': 'hsl(84, 70%, 50%)' },
    { 'id': 'reputation', 'label': 'reputation', 'value': reputationAverage, 'color': 'hsl(307, 70%, 50%)' }
  ]

  return (
    <div>
      <h4>{family.familyName}, {family.numberOfKids} kids</h4>
      <h5>{family.parentOneName} {family.familyName}, {family.city}, {family.state}</h5><br />
      {showChart && <StatsChart data= { data } />}
      {showRatings && <Ratings name={name} />}
      <div className='family-button-center'>
        <button onClick={onShowRatings}>Show Ratings</button>
        <Link to={`/families/${props.match.params.id}/rate`}>
          <button> New Rating </button>
        </Link>
        <Link to="/families">
          <button> Back to Families </button>
        </Link>
      </div>
    </div>
  )
}

export default Family

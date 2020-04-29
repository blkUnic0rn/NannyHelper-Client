import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { VictoryPie } from 'victory'

import Ratings from '../Ratings/Ratings'

import apiUrl from '../../apiConfig'

const Family = props => {
  const [family, setFamily] = useState(null)
  const [ratings, setRatings] = useState(null)
  const [showRatings, setShowRatings] = useState(false)
  const [showChart, setShowChart] = useState(false)
  const [happinessA, setHappiness] = useState(0)
  const [honestyArray, setHonesty] = useState(0)
  const [reliabilityArray, setReliability] = useState(0)
  const [consistencyArray, setConsistency] = useState(0)
  const [respectArray, setRespect] = useState(0)
  const [benefitsArray, setBenefits] = useState(0)
  const [kidsArray, setKids] = useState(0)
  const [safetyArray, setSafety] = useState(0)
  const [payArray, setPay] = useState(0)

  useEffect(() => {
    axios(`${apiUrl}/families/${props.match.params.id}`)
      .then(res => setFamily(res.data.family))
      .catch(console.error)
  }, [])

  useEffect(() => {
    axios(`${apiUrl}/ratings`)
      .then(res => setRatings(res.data.ratings))
      .catch(console.error)
  }, [])

  const onShowRatings = () => {
    if (ratings) {
      setShowRatings(true)
      splitRatings()
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
    const currRatings = ratings.filter(rating => rating.family.familyName === name)
    console.log(currRatings)
    const happiness = []
    const honesty = []
    const reliability = []
    const consistency = []
    const respect = []
    const benefits = []
    const kids = []
    const safetyAndComfort = []
    const pay = []
    currRatings.forEach(rating => ( // for each rating in ratings array
      happiness.push(parseInt(rating.happiness)) && // push the happiness Int to the happiness array
      honesty.push(parseInt(rating.honesty)) &&
      reliability.push(parseInt(rating.reliability)) &&
      consistency.push(parseInt(rating.consistency)) &&
      respect.push(parseInt(rating.respect)) &&
      benefits.push(parseInt(rating.benefits)) &&
      kids.push(parseInt(rating.kids)) &&
      safetyAndComfort.push(parseInt(rating.safetyAndComfort)) &&
      pay.push(parseInt(rating.pay))
    ))

    const happySum = (happiness.reduce((z, x) => z + x, 0)) / happiness.length // find the average of the happiness array
    const honestySum = (honesty.reduce((z, x) => z + x, 0)) / honesty.length
    const reliabilitySum = (reliability.reduce((z, x) => z + x, 0)) / reliability.length
    const consistencySum = (consistency.reduce((z, x) => z + x, 0)) / consistency.length
    const respectSum = (respect.reduce((z, x) => z + x, 0)) / respect.length
    const benefitsSum = (benefits.reduce((z, x) => z + x, 0)) / benefits.length
    const kidsSum = (kids.reduce((z, x) => z + x, 0)) / kids.length
    const safetySum = (safetyAndComfort.reduce((z, x) => z + x, 0)) / safetyAndComfort.length
    const paySum = (pay.reduce((z, x) => z + x, 0)) / pay.length

    setHappiness(happySum)
    setHonesty(honestySum)
    setReliability(reliabilitySum)
    setConsistency(consistencySum)
    setRespect(respectSum)
    setBenefits(benefitsSum)
    setKids(kidsSum)
    setSafety(safetySum)
    setPay(paySum)
    setShowChart(true)
  }

  return (
    <div>
      <h4>{family.familyName}, {family.numberOfKids} kids</h4>
      <h5>{family.parentOneName} {family.familyName}, {family.city}, {family.state}</h5><br />
      {showChart && <VictoryPie
        colorScale={'blue'}
        data={[
          { x: 'Happiness', y: happinessA },
          { x: 'Honesty', y: honestyArray },
          { x: 'Reliability', y: reliabilityArray },
          { x: 'Consistency', y: consistencyArray },
          { x: 'Respect', y: respectArray },
          { x: 'Benefits', y: benefitsArray },
          { x: 'Kids', y: kidsArray },
          { x: 'Saftey and Comfort', y: safetyArray },
          { x: 'Pay', y: payArray }
        ]}
      />}
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

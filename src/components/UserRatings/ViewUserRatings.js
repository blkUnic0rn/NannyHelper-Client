import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class ViewUserRatings extends Component {
  constructor () {
    super()

    this.state = {
      ratings: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/ratings`)
      .then(res => this.setState({ ratings: res.data.ratings }))
      .catch(console.error)
  }

  render () {
    const { user } = this.props
    const { ratings } = this.state

    console.log(ratings)

    return (
      <div>
        <h4>Users Ratings</h4>
        <ul>
          {ratings.filter(rating => rating.user.id === user.id).map(rating => (
            <li key={rating.id}>
              {rating.family.familyName}
              <Link to={`/ratings/${rating.id}`}>View Rating</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ViewUserRatings

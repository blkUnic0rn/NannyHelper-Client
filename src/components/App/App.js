import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Families from '../Families/Families'
import Family from '../Family/Family'
import FamilyCreate from '../FamilyCreate/FamilyCreate'
import NewRating from '../NewRating/NewRating'
import ViewUserRatings from '../UserRatings/ViewUserRatings'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <Route exact path='/families' render={() => (
            <Families msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/families/:id' render={({ match }) => (
            <Family msgAlert={this.msgAlert} setUser={this.setUser} match={match} />
          )} />
          <AuthenticatedRoute exact path='/create-family' component={FamilyCreate} />
          <AuthenticatedRoute exact user={user} path='/families/:id/rate' render={({ match }) => (
            <NewRating msgAlert={this.msgAlert} user={user} match={match}/>
          )} />
          <AuthenticatedRoute exact user={user} path='/ratings' render={({ match }) => (
            <ViewUserRatings msgAlert={this.msgAlert} user={user} match={match}/>
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App

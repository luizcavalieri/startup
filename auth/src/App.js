import React from 'react'
import { Switch, Redirect, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Signup from './components/Signup'
import Signin from './components/Signin'

const generateClassName = createGenerateClassName({ productionPrefix: 'auth' })

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
            <Route exact path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/">
              <Redirect to="/auth/signin" />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
    )
}

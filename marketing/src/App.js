import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' })

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route component={Landing} exact path="/" />
            <Route component={Pricing} exact path="/pricing" />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
    )
}

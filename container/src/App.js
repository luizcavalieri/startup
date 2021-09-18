import { StylesProvider } from '@material-ui/core'
import React from 'react'
import { mount } from 'marketingApp/MarketingApp'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppRenderer from './components/AppRenderer'

const MarketingApp = () => <AppRenderer mount={mount} />

export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route component={MarketingApp} exact path="/" />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  )
}

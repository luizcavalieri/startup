import { StylesProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { mount } from 'marketingApp/MarketingApp'
import AppRenderer from './components/AppRenderer'
import Header from './components/Header'

const MarketingApp = () => <AppRenderer mount={mount} />

export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={MarketingApp} exact path="/" />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  )
}

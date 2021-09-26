import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { mount } from 'marketingApp/MarketingApp'
import AppRenderer from './components/AppRenderer'
import Header from './components/Header'

const generateClassName = createGenerateClassName({ productionPrefix: 'cont' })

const MarketingApp = () => <AppRenderer mount={mount} />

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Switch>
          <Route component={MarketingApp} path="/" />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  )
}

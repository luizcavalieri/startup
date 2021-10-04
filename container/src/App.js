import React, { lazy, Suspense } from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Progress from './components/Progress'

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({ productionPrefix: 'cont' })

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route component={AuthLazy} path="/auth" />
            <Route component={MarketingLazy} path="/" />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  )
}

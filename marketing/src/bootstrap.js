import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory, createMemoryHistory } from 'history'
import App from './App'

const mount = (el, { defaultHistory, initialPath, onNavigate }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  })
  if (onNavigate) history.listen(onNavigate)

  ReactDOM.render(<App history={history} />, el)

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { location, push } = history
      if (location.pathname !== nextPathname) {
        push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const app = document.getElementById('app')
  if (app) {
    mount(app, { defaultHistory: createBrowserHistory(), onNavigate: () => undefined })
  }
}

export { mount }

import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'

export default ({ mount }) => {
  const ref = useRef(null)
  const { listen, location, push } = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(
      ref.current,
      {
        initialPath: location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          if (location.pathname !== nextPathname) push(nextPathname)
        },
        onSignIn: () => {
          console.log('Sign in handler')
        }
      }
    )
    listen(onParentNavigate)
  }, [mount, ref, listen])

  return <div ref={ref} />
}

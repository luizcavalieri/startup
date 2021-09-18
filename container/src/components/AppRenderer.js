import React, { useEffect, useRef } from 'react'

export default ({ mount }) => {
  const ref = useRef(null)
  useEffect(() => mount(ref.current), [mount, ref])
  return <div ref={ref} />
}

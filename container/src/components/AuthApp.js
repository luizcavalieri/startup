import React from 'react'
import AppRenderer from './AppRenderer'
import { mount as authMount } from 'authApp/AuthApp'

export default () => <AppRenderer mount={authMount} />


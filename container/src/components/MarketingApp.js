import React from 'react'
import AppRenderer from './AppRenderer'
import { mount as marketingMount } from 'marketingApp/MarketingApp'

export default () => <AppRenderer mount={marketingMount} />


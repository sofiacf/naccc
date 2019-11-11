import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app/components/App'
import './app/style.css'

ReactDOM.render(<App/>, document.getElementById('root'))
serviceWorker.unregister()

import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import App from './containers/App'
import reducers from './reducers'
import './styles.css'

const store = createStore(
	reducers,
	applyMiddleware(logger, thunk)
)


ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider> ,
	document.getElementById('app')
)

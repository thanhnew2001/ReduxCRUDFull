import React from 'react'

import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import combinedReducer from './reducers/reducers'

import thunk from 'redux-thunk'


let store = createStore(combinedReducer, applyMiddleware(thunk))


render(

   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('app')
	
   
)
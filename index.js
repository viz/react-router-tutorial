import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'


/****************************************************************************
 * Add support for react-router-redux
 */
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {syncHistory, routeReducer} from 'react-router-redux'

const reducer = combineReducers(Object.assign({}, {routing: routeReducer}));
const reduxRouterMiddleware = syncHistory(browserHistory);

const store = createStore(reducer, compose(
  applyMiddleware(reduxRouterMiddleware),
  window.devToolsExtension? window.devToolsExtension() : f => f
));
/*
 * end react-router-redux setup
 *****************************************************************************/

// react-router-redux change - wrap <Router> component in a <Provider> component
render((
  <Provider store = {store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>
), document.getElementById('app'))


import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
import {grey800, grey900} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Title from './components/Title'
import Menu from './components/Menu'
import Home from './containers/Home'
import Create from './containers/Create'
import Trade from './containers/Trade'

injectTapEventPlugin();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey800,
    primary2Color: grey900
  }
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <div>
          <Title /> 
          <Menu />

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/create" component={Create}/>
          <Route path="/trade" component={Trade}/>
        </div>
      </Router>

    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)


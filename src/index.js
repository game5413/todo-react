import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import configureStore from './store'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const Menu = ({match}) => (
  <div>
    <h1>Menu for {match.params.id}</h1>
  </div>
)

const _404 = () => (
  <div>
    <h1>404 Not Found</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route
        exact
        path="/"
        render={props => <App {...props} extra={{ someVariable }} />}
      />
      <Route path="/menu/:id" component={Menu} />
      <Route component={_404} />
    </Switch>
  </main>
)

const someVariable = "isOkay"

ReactDOM.render(
  <Router>
    <Provider store={configureStore()}>
        <Link to={'/'}>Dasboard</Link>
        <Link to={'/menu/2'}>Menu</Link>
        <Main/>
    </Provider>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

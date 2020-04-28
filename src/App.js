import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Table from './components/Table'
import Pager from './components/Pager'

const App = () => {
  return (
    <main>
      <h1>ACME Pager</h1>
      <HashRouter>
        <Route path="/:page" component={Table} />
        <Route path="/:page" component={Pager} />
        <Redirect to="/0" />
      </HashRouter>
    </main>
  )
}

export default App

import React, { Component } from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Table from './components/Table'
import Pager from './components/Pager'
import { connect } from 'react-redux'
import { loadEmployees } from './store'

class App extends Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    console.log('App - on mount')
    this.props.load()
  }
  render() {
    console.log('App - in render')
    return (
      <main>
        <h1>ACME Pager</h1>
        <HashRouter>
          <Route exact path="/:page">
            <Table />
            <Pager />
          </Route>
        </HashRouter>
      </main>
    )
  }
}

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      console.log('loading data')
      dispatch(loadEmployees(0))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

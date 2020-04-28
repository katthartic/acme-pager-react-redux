import React, { Component } from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Table from './components/Table'
import Pager from './components/Pager'
import { loadEmployees } from './store'

class App extends Component {
  // componentDidMount() {
  //   const page = 0
  //   this.props.load(page)
  // }

  render() {
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
}

// const mapStateToProps = ({ employees }) => employees.count

// const mapDispatchToProps = (dispatch) => {
//   return {
//     load: (page) => {
//       console.log('loading data')
//       dispatch(loadEmployees(page))
//     },
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App

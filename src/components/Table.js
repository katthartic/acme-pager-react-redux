import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadEmployees } from '../store'

class Table extends Component {
  constructor() {
    super()
    this.state = {
      headers: [],
    }
  }

  componentDidMount() {
    const page = this.props.match.params.page
    this.props.load(page)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Postion</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    )
  }
}

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    load: (page) => {
      console.log('loading data')
      dispatch(loadEmployees(page))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)

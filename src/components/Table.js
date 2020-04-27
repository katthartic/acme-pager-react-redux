import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component {
  constructor() {
    super()
    this.state = {
      headers: [],
    }
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadEmployees } from '../store'

class Table extends Component {
  componentDidMount() {
    const page = this.props.match.params.page
    this.props.load(page)
  }

  render() {
    console.log(this.props.employees)
    const employees = this.props.employees.rows || []
    return (
      <div id="table-container">
        <table className="fixed_header">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Postion</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ employees }) => ({
  employees,
})

const mapDispatchToProps = (dispatch) => {
  return {
    load: (page) => {
      console.log('loading data')
      dispatch(loadEmployees(page))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)

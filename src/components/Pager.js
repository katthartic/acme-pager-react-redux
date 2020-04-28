import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Pager = ({ match, employees }) => {
  const maxPerPage = 50
  const currentPage = match.params.page * 1
  const employeeCount = employees.count || maxPerPage //default to one page
  const pageCount = Math.ceil(employeeCount / maxPerPage)
  const pages = []

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <nav>
      <Link to={`/${currentPage > 0 ? currentPage - 1 : 0}`}>Prev</Link>
      {pages.map((page, idx) => (
        <Link className={idx === currentPage ? 'selected' : ''} to={`/${idx}`}>
          {page}
        </Link>
      ))}
      <Link
        to={`/${
          currentPage < pageCount - 1 ? currentPage + 1 : pageCount - 1
        }`}>
        Next
      </Link>
    </nav>
  )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Pager)

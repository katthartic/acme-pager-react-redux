import axios from 'axios'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunks from 'redux-thunk'
import { createLogger } from 'redux-logger'

//constants
const LOADED_EMPLOYEES = 'LOADED_EMPLOYEES'

//action creators
const loadedEmployees = (employees) => ({ type: LOADED_EMPLOYEES, employees })

//thunks
const loadEmployees = (page) => async (dispatch) => {
  const employees = (await axios.get(`/api/employees/${page}`)).data
  dispatch(loadedEmployees(employees))
}

//reducers
const employeesReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADED_EMPLOYEES:
      return action.employees
    default:
      return state
  }
}

const reducer = combineReducers({
  employees: employeesReducer,
})

const store = createStore(
  reducer,
  applyMiddleware(thunks, createLogger({ collapsed: true }))
)

export default store

export { loadEmployees }

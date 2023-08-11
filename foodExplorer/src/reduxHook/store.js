import { configureStore } from '@reduxjs/toolkit'

export const updateValue = (newValue) => ({
  type: 'UPDATE_VALUE',
  payload: newValue
})

// updating global State
const initialState = {
  value: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':

      return {
        ...state,
        value: action.payload
      };
      
    default:
      return state
  }
}

export const store = configureStore({ reducer })


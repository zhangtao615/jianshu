/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState =fromJS({
  
})

export default function (state = defaultState, action) { 
  switch(action.type) {
    default:
      return state
  }  
}
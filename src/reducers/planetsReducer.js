/* eslint-disable import/no-anonymous-default-export */
import { TOTAL_PLANET_RESULT } from "../actions/actionTypes";

const DEFAULT_STATE = {}
 
 export default (state = DEFAULT_STATE, action) => {
     const {type, payload} = action
     console.log('payload', payload)
     switch (type) {
         case TOTAL_PLANET_RESULT:
             return {
                 ...state, 
                 list: payload.results,
                 planetAPIresponse: payload
             };

         default:
             return state
     }
 }
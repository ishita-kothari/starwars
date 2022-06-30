/* eslint-disable import/no-anonymous-default-export */
import { PERSON_DETAIL, TOTAL_PEOPLE_RESULT } from "../actions/actionTypes";

const DEFAULT_STATE = {}
 
 export default (state = DEFAULT_STATE, action) => {
     const {type, payload} = action
     switch (type) {
         case TOTAL_PEOPLE_RESULT:
             console.log('total result')
             return {
                 ...state, 
                 list: payload.results,
                 peopleAPIresponse: payload
             };
        case PERSON_DETAIL: 
             return {
                 ...state,
                 detail: payload
             }
         default:
             return state
     }
 }
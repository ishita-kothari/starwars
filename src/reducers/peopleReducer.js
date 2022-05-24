import { PERSON_DETAIL, TOTAL_PEOPLE_RESULT } from "../actions/actionTypes";

const DEFAULT_STATE = {}
 
 export default (state = DEFAULT_STATE, action) => {
     const {type, payload} = action
     switch (type) {
         case TOTAL_PEOPLE_RESULT:
             console.log('total result')
             return {
                 ...state, ...payload
             };
        case PERSON_DETAIL: 
             const copiedState = JSON.parse(JSON.stringify(state))
             console.log('copie', copiedState)
             const filteredState = copiedState.results.filter(item => console.log('item', item, payload))
             return state
         default:
             return state
     }
 }
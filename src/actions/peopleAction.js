import axios  from "axios";
import { PERSON_DETAIL, TOTAL_PEOPLE_RESULT } from "./actionTypes";

const storePeopleList = (payload) =>({
    type: TOTAL_PEOPLE_RESULT,
    payload
})

const storePersonDetail = (payload) =>({
    type: PERSON_DETAIL,
    payload
})

export const getPeopleList = (dispatch, page = 1) => {
    return new Promise((resolve, reject) => {
        return axios.get(`https://swapi.dev/api/people/?page=${page}`).then((res) =>{
            console.log('in list')
            dispatch(storePeopleList(res.data))
            resolve(res)
        }).catch(err => reject(err));
    });
        
}

export const getPersonById = (dispatch, personID) => {
    console.log('iddd', personID)
    return new Promise((resolve, reject) => {
        return axios.get(`https://swapi.dev/api/people/${personID}`).then((res) =>{
            console.log('res', res)
            dispatch(storePersonDetail(res.data))
            resolve(res)
        }).catch(err => reject(err));
    });
        
}
import axios  from "axios";
import { TOTAL_PLANET_RESULT } from "./actionTypes";

const storePlanetList = (payload) =>({
    type: TOTAL_PLANET_RESULT,
    payload
})

export const getPlanetsList = (dispatch, page = 1) => {
    return new Promise((resolve, reject) => {
        return axios.get(`https://swapi.dev/api/planets/?page=${page}`).then((res) =>{
            console.log('in action', res, page)
            dispatch(storePlanetList(res.data))
            resolve(res)
        }).catch(err => reject(err));
    });
        
}
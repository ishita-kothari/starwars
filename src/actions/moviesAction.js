import axios  from "axios";
import { TOTAL_MOVIES_RESULT } from "./actionTypes";

const storeMoviesList = (payload) =>({
    type: TOTAL_MOVIES_RESULT,
    payload
})

export const getMoviesList = (dispatch) => {
    return new Promise((resolve, reject) => {
        return axios.get(`https://swapi.dev/api/films`).then((res) =>{
            dispatch(storeMoviesList(res.data))
            resolve(res)
        }).catch(err => reject(err));
    });
        
}
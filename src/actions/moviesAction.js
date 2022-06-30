import axios from "axios";
import {
  MOVIE_CHARACTERS,
  MOVIE_PLANETS,
  TOTAL_MOVIES_RESULT,
} from "./actionTypes";

export const storeMoviesList = (payload) => ({
  type: TOTAL_MOVIES_RESULT,
  payload,
});

export const movieCharactesList = (payload) => ({
  type: MOVIE_CHARACTERS,
  payload,
});

export const moviePlanetsList = (payload) => ({
  type: MOVIE_PLANETS,
  payload,
});

export const getMoviesList = (dispatch) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`https://swapi.dev/api/films`)
      .then((res) => {
        dispatch(storeMoviesList(res.data.results));
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

export const getMoviesCharacters = (dispatch, data) => {
  const newArr = data.map((item) => axios.get(item));
  return new Promise((resolve, reject) => {
    return axios
      .all(newArr)
      .then(
        axios.spread((...res) => {
          dispatch(movieCharactesList(res.map((i) => i.data)));
          resolve(res);
        })
      )
      .catch((err) => reject(err));
  });
};

export const getMoviesPlanets = (dispatch, data) => {
  const newArr = data.map((item) => axios.get(item));
  return new Promise((resolve, reject) => {
    return axios
      .all(newArr)
      .then(
        axios.spread((...res) => {
          dispatch(moviePlanetsList(res.map((i) => i.data)));
          resolve(res);
        })
      )
      .catch((err) => reject(err));
  });
};

export const getMoviedBy = (dispatch, list) => {
  console.log('list', list)
  const newArr = list.map((item) => axios.get(item));
  return new Promise((resolve, reject) => {
    return axios
      .all(newArr)
      .then(
        axios.spread((...res) => {
          console.log('ress', res)
          dispatch(storeMoviesList(res.map(i => i.data)))
          resolve(res);
        })
      )
      .catch((err) => reject(err));
  });
}
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import {
  getMoviesCharacters,
  getMoviesPlanets,
  movieCharactesList,
  moviePlanetsList,
} from "../../actions/moviesAction";
import Characters from "../../common/characters.tsx";
import Planet from "../../common/planet.tsx";
import "../../index.css";

const MovieDetails = ({
  getMoviesCharactersAction,
  charactersList,
  emptyCharacterList,
  getMoviesPlanetsAction,
  planetsList,
  emptyPlanetsList,
}) => {
  const { state } = useLocation();

  useEffect(() => {
    return () => {
      emptyCharacterList();
      emptyPlanetsList();
    };
  }, []);

  return (
    <div>
      <div className="flex-center" style={{marginBottom: 10}}>
      <Typography
          variant="h4"
          gutterBottom
          component="div"
          color="#fff"
          style={{ marginBottom: 0, marginRight: 10}}
        >
          {state.title} :  
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => {
              getMoviesCharactersAction(state.characters)
              emptyPlanetsList()
              }}>
            Characters
          </Button>
          <Button onClick={() => {
              getMoviesPlanetsAction(state.planets)
              emptyCharacterList()
          }}>
            Planets
          </Button>
        </ButtonGroup>
      </div>
      {charactersList && (
        <Grid container spacing={2}>
          {charactersList.map((item) => (
            <Grid item xs={12} md={4}>
              <Characters person={item} />
            </Grid>
          ))}
        </Grid>
      )}
      {planetsList && (
        <Grid container spacing={2}>
          {planetsList.map((item) => (
            <Grid item xs={12} md={4}>
              <Planet planet={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesCharactersAction: (data) => getMoviesCharacters(dispatch, data),
    emptyCharacterList: () => dispatch(movieCharactesList([])),
    getMoviesPlanetsAction: (data) => getMoviesPlanets(dispatch, data),
    emptyPlanetsList: () => dispatch(moviePlanetsList([])),
  };
};

const mapStateToProps = (state) => {
  return {
    charactersList: state.moviesReducer.characters,
    planetsList: state.moviesReducer.planets,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

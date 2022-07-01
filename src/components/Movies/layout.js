import { Card, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { storeMoviesList } from "../../actions/moviesAction";

const MoviesLayout = ({ moviesList, clearMoviesList }) => {
  useEffect(() => {
    return () => {
      clearMoviesList()
    }
  }, [])
  
  return (
    <Grid container spacing={1}>
      {moviesList.length > 0 ?
        moviesList.map((movie) => (
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <Paper elevation={24} className="paper-container">
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  className="person-title"
                >
                  Title:
                </Typography>
                <Typography variant="span" gutterBottom component="div">
                  {movie.title}
                </Typography>
              </Paper>

              <Paper elevation={24} className="paper-container">
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  className="person-title"
                >
                  Director:
                </Typography>
                <Typography variant="span" gutterBottom component="div">
                  {movie.director}
                </Typography>
              </Paper>

              <Paper elevation={24} className="paper-container">
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  className="person-title"
                >
                  Producer:
                </Typography>
                <Typography variant="span" gutterBottom component="div">
                  {movie.producer}
                </Typography>
              </Paper>

              <Paper elevation={24} className="paper-container">
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  className="person-title"
                >
                  Release Date:
                </Typography>
                <Typography variant="span" gutterBottom component="div">
                  {movie.release_date}
                </Typography>
              </Paper>

              <Paper elevation={24} className="paper-container">
                <Link
                  to={{
                    pathname: "/movieDetails",
                    state: {
                      characters: movie.characters,
                      planets: movie.planets,
                      starships: movie.starships,
                      vehicles: movie.vehicles,
                      species: movie.species,
                      title: movie.title,
                    },
                  }}
                >
                  Other Details
                </Link>
              </Paper>
            </Card>
          </Grid>
        )) : <p style={{ color: '#fff', fontSize: 40, width: '100%', textAlign: 'center'}}>No Films Found :((</p>}
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearMoviesList: () => dispatch(storeMoviesList([]))
})

const mapStateToProps = (state) => {
  return {
    moviesList: state.moviesReducer.movies || [],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesLayout);
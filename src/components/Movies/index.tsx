import { Card, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMoviesList } from "../../actions/moviesAction";

interface MoviesProps{
  getMoviesAction: any;
  moviesList: any
}

interface Movie{
  title: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<any>;
  planets: Array<any>
}

interface Reducer{
  moviesReducer:{
    movies: any
  }
}
const Movies = ({ getMoviesAction, moviesList }: MoviesProps) => {
  useEffect(() => {
    getMoviesAction();
  }, []);

  return (
    <Grid container spacing={1}>
      {Object.keys(moviesList).length > 0 &&
        moviesList.results.map((movie: Movie) => (
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
                <Typography variant="subtitle1" gutterBottom component="div">
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
                <Typography variant="subtitle1" gutterBottom component="div">
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
                <Typography variant="subtitle1" gutterBottom component="div">
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
                <Typography variant="subtitle1" gutterBottom component="div">
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
                      title: movie.title
                    },
                  }}
                >
                  Other Details
                </Link>
              </Paper>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMoviesAction: () => getMoviesList(dispatch),
  };
};

const mapStateToProps = (state: Reducer) => {
  return {
    moviesList: state.moviesReducer.movies || {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

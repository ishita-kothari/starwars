import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMoviesList } from "../../actions/moviesAction";
import MoviesLayout from "./layout";

const Movies = ({ getMoviesAction }) => {
  useEffect(() => {
      getMoviesAction();
  }, []);

  return (
   <MoviesLayout />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesAction: () => getMoviesList(dispatch),
  };
};

export default connect(() => ({}), mapDispatchToProps)(Movies);

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouteMatch, Link, Route, useHistory } from "react-router-dom";
import "../People/styles.css";
import PlanetDetail from "./details.js";
import { getPlanetsList } from "../../actions/planetsAction";
import { connect } from "react-redux";
import { Pagination } from "@mui/material";

const Planets = ({ getPlanetAction, planetList, planetData }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const { url, path } = useRouteMatch();
  let history = useHistory();
  const callList = () => {
    getPlanetAction(currentPage);
  };
  useEffect(() => {
    callList();
  }, []);

  console.log("planetLis", planetList);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
      {planetList.length > 0 &&
          planetList.map((item, id) => (
            <Link
              to={{
                pathname: `${url}/${item.url.split("/")[5]}`,
                search: `page=${currentPage}`,
              }}
              onClick={() => {
                setIsDetailsShown(true);
              }}
              key={`${url}/${item.url.split("/")[5]}`}
            >
              <Paper elevation={24} className="paper-container">
                <AccountCircleIcon color="info" fontSize="large" />
                <p className="title">{item.name}</p>
              </Paper>
            </Link>
          ))}
        <Paper elevation={24} className="paper-container">
          <Pagination
            count={planetData && Math.ceil(planetData.count / 10)}
            color="primary"
            page={parseInt(currentPage, 10)}
            defaultPage={parseInt(currentPage, 10)}
            onChange={(e, page) => {
              getPlanetAction(page);
              history.push(`/planets?page=${page}`);
              setIsDetailsShown(false);
              setCurrentPage(page);
            }}
            size="small"
            xs
          />
        </Paper>
      </Grid>
      <Grid item md={4} xs={12}>
        <Route path={`${path}/:planetId`}>
          <PlanetDetail />
        </Route>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlanetAction: (page) => getPlanetsList(dispatch, page),
  };
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    planetList: state.planetsReducer.list || [],
    planetData: state.planetsReducer.planetAPIresponse,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);

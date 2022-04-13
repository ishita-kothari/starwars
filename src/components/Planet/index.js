import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  useRouteMatch,
  useParams,
  Link,
  Route,
  Router,
  Switch,
  useHistory,
} from "react-router-dom";
import "../People/styles.css";
import PlanetDetail from "./details.js";
import { getPlanetsList } from "../../actions/planetsAction";
import { connect } from "react-redux";
import { Pagination } from "@mui/material";

const Planets = ({ getPlanetAction, planetList }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const { url, path } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    getPlanetAction();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        {Object.keys(planetList).length > 0 &&
          planetList.results.map((item, id) => (
            <Link
              to={`${url}/${item.url.split("/")[5]}`}
              onClick={() => setIsDetailsShown(true)}
            >
              <Paper elevation={24} className="paper-container">
                <AccountCircleIcon color="info" fontSize="large" />
                <p className="title">{item.name}</p>
              </Paper>
            </Link>
          ))}

        <Paper elevation={24} className="paper-container">
          <Pagination
            count={planetList && Math.ceil(planetList.count / 10)}
            color="primary"
            onChange={(e, page) => {
              getPlanetAction(page);
              if (isDetailsShown) {
                history.push("/planets");
                setIsDetailsShown(false);
              }
            }}
          />
        </Paper>
      </Grid>
      <Grid item md={4}>
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
  return {
    planetList: state.planetsReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);

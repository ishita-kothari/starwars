import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  useRouteMatch,
  Link,
  Route,
  useHistory,
} from "react-router-dom";
import { connect } from "react-redux";
import PersonDetail from "./details.js";
import "./styles.css";
import { getPeopleList } from "../../actions/peopleAction.js";
import { Pagination } from "@mui/material";

const People = ({ getPeopleAction, peopleList }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const { url, path } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    getPeopleAction();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        {Object.keys(peopleList).length > 0 &&
          peopleList.results.map((item, id) => (
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
            count={peopleList && Math.ceil(peopleList.count / 10)}
            color="primary"
            onChange={(e, page) => {
              getPeopleAction(page);
              if (isDetailsShown) {
                history.push("/people");
                setIsDetailsShown(false)
              }
            }}
            size="small"
            xs
          />
        </Paper>
      </Grid>
      <Grid item md={4} xs={12}>
        <Route path={`${path}/:peopleId`}>
          <PersonDetail />
        </Route>
      </Grid>
    </Grid>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    getPeopleAction: (page) => getPeopleList(dispatch, page),
  };
};

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);

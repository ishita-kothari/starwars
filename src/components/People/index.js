import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouteMatch, Link, Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PersonDetail from "./details.js";
import "./styles.css";
import { getPeopleList } from "../../actions/peopleAction.js";
import { Pagination } from "@mui/material";

const People = ({ getPeopleAction, peopleList, peopleData }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const { url, path } = useRouteMatch();
  let history = useHistory();
  const callList = () => {
    getPeopleAction(currentPage);
  };
  useEffect(() => {
    callList();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        {peopleList.length > 0 &&
          peopleList.map((item, id) => (
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
            count={peopleData && Math.ceil(peopleData.count / 10)}
            color="primary"
            page={parseInt(currentPage, 10)}
            defaultPage={parseInt(currentPage, 10)}
            onChange={(e, page) => {
              getPeopleAction(page);
              history.push(`/people?page=${page}`);
              setIsDetailsShown(false);
              setCurrentPage(page);
            }}
          />
        </Paper>
      </Grid>
      <Grid item md={4}>
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
    peopleList: state.peopleReducer.list || [],
    peopleData: state.peopleReducer.peopleAPIresponse,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);

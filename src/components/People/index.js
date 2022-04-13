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
import { connect } from "react-redux";
import PersonDetail from "./details.js";
import "./styles.css";
import { getPeopleList } from "../../actions/peopleAction.js";
import { Pagination } from "@mui/material";

export const peopleArray = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    species: [],
    vehicles: [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/",
    ],
    starships: [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/",
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.dev/api/people/1/",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/",
    ],
    species: ["https://swapi.dev/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "https://swapi.dev/api/people/2/",
  },
];

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
                console.log('inside if')
                history.push("/people");
                setIsDetailsShown(false)
              }
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

// export default People;

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

import React from "react";
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
} from "react-router-dom";
import PersonDetail from "./details.js";
import "./styles.css";

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

const People = () => {
  const { url, path } = useRouteMatch();
  console.log(url, path, "url");
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        {peopleArray.map((item, id) => (
          <Link to={`${url}/${id + 1}`}>
            <Paper elevation={24} className="paper-container">
              <AccountCircleIcon color="info" fontSize="large" />
              <p className="title">{item.name}</p>
            </Paper>
          </Link>
        ))}
      </Grid>
      <Grid item md={4}>
        <Route path={`${path}/:peopleId`}>
          <PersonDetail />
        </Route>
      </Grid>
    </Grid>
  );
};

export default People;

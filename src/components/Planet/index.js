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
import "../People/styles.css";
import PlanetDetail from "./details.js";

export const planetsArray = [
  {
    name: "Tatooine",
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    climate: "arid",
    gravity: "1 standard",
    terrain: "desert",
    surface_water: "1",
    population: "200000",
    residents: [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/2/",
      "https://swapi.dev/api/people/4/",
      "https://swapi.dev/api/people/6/",
      "https://swapi.dev/api/people/7/",
      "https://swapi.dev/api/people/8/",
      "https://swapi.dev/api/people/9/",
      "https://swapi.dev/api/people/11/",
      "https://swapi.dev/api/people/43/",
      "https://swapi.dev/api/people/62/",
    ],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/",
    ],
    created: "2014-12-09T13:50:49.641000Z",
    edited: "2014-12-20T20:58:18.411000Z",
    url: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Alderaan",
    rotation_period: "24",
    orbital_period: "364",
    diameter: "12500",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grasslands, mountains",
    surface_water: "40",
    population: "2000000000",
    residents: [
      "https://swapi.dev/api/people/5/",
      "https://swapi.dev/api/people/68/",
      "https://swapi.dev/api/people/81/",
    ],
    films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/6/"],
    created: "2014-12-10T11:35:48.479000Z",
    edited: "2014-12-20T20:58:18.420000Z",
    url: "https://swapi.dev/api/planets/2/",
  },
];

const Planets = () => {
  const { url, path } = useRouteMatch();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        {planetsArray.map((item, id) => (
          <Link to={`${url}/${id + 1}`}>
            <Paper elevation={24} className="paper-container">
              <AccountCircleIcon color="info" fontSize="large" />
              <p className="title">{item.name}</p>
            </Paper>
          </Link>
        ))}
      </Grid>
      <Grid item md={4}>
        <Route path={`${path}/:planetId`}>
          <PlanetDetail />
        </Route>
      </Grid>
    </Grid>
  );
};

export default Planets;

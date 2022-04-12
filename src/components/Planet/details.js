import React from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { planetsArray } from "./index.js";
import Typography from "@mui/material/Typography";
import "../People/styles.css";

const PlanetDetail = () => {
  const { planetId } = useParams();
  const { url, path } = useRouteMatch();
  const planet = planetsArray.find((id) => id.url.split("/")[5] === planetId);
  console.log("plane", planet);
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: "10px" }}>
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
          {planet.name}
        </Typography>
      </Paper>

      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Terrain:
        </Typography>
        <Typography variant="span" gutterBottom component="div">
          {planet.terrain}
        </Typography>
      </Paper>

      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Population:
        </Typography>
        <Typography variant="span" gutterBottom component="div">
          {planet.population}
        </Typography>
      </Paper>
    </Card>
  );
};

export default PlanetDetail;

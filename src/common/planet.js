import React from "react";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "../components/People/styles.css";
import { Link } from "react-router-dom";

const Planet = ({ planet, getMoviedByAction }) => {
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
          {planet.name.toUpperCase()}
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
          {planet.terrain.toUpperCase()}
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
      <Paper elevation={24} className="paper-container">
        <Link
          to={`/movieBy?planet=${planet.name}`}
          onClick={() => getMoviedByAction(planet.films)}
        >
          Associated Movies
        </Link>
      </Paper>

    </Card>
  );
};

export default Planet;

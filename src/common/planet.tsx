import React from "react";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "../components/People/styles.css";

interface PlanetProps{
  planet:{
    name: string;
    terrain: string;
    population: number | string;
  }
}
const Planet = ({
  planet
}: PlanetProps) => {
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
        <Typography variant="subtitle1" gutterBottom component="div">
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
        <Typography variant="subtitle1" gutterBottom component="div">
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
        <Typography variant="subtitle1" gutterBottom component="div">
          {planet.population}
        </Typography>
      </Paper>
    </Card>
  );
};

export default Planet
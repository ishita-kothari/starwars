import React from "react";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "../components/People/styles.css";

interface PersonProps {
  person:{
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    gender: string;
    birth_year: string
  }
}
const Characters = ({person}: PersonProps) => {
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: "10px" }}>
      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Name:
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {person.name.toUpperCase()}
        </Typography>
      </Paper>
      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Height:
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {person.height}
        </Typography>
      </Paper>
      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Mass:
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {person.mass}
        </Typography>
      </Paper>
      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Hair Color:
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {person.hair_color.toUpperCase()}
        </Typography>
      </Paper>
      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Skin Color:
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {person.skin_color.toUpperCase()}
        </Typography>
      </Paper>
      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Gender:
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {person.gender.toUpperCase()}
        </Typography>
      </Paper>
      <Paper elevation={24} className="paper-container">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="person-title"
        >
          Birth Year:
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {person.birth_year.toUpperCase()}
        </Typography>
      </Paper>
    </Card>
  );
};

export default Characters


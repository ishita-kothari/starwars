import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { connect } from "react-redux";

const PersonDetail = ({
  peopleList
}) => {
  const { peopleId } = useParams();
  const person = peopleList.results.find((id) => id.url.split("/")[5] === peopleId);

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
        <Typography variant="span" gutterBottom component="div">
          {person.name}
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
        <Typography variant="span" gutterBottom component="div">
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
        <Typography variant="span" gutterBottom component="div">
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
        <Typography variant="span" gutterBottom component="div">
          {person.hair_color}
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
        <Typography variant="span" gutterBottom component="div">
          {person.skin_color}
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
        <Typography variant="span" gutterBottom component="div">
          {person.gender}
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
        <Typography variant="span" gutterBottom component="div">
          {person.birth_year}
        </Typography>
      </Paper>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleReducer ,
  };
};

export default connect(mapStateToProps, () => ({}))(PersonDetail);


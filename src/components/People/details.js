import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { connect } from "react-redux";
import Characters from "../../common/characters";

const PersonDetail = ({
  peopleList
}) => {
  const { peopleId } = useParams();
  const person = peopleList.results.find((id) => id.url.split("/")[5] === peopleId);

  return (
    <Characters person={person} />
  );
};

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleReducer ,
  };
};

export default connect(mapStateToProps, () => ({}))(PersonDetail);


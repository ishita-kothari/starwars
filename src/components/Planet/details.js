import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import "../People/styles.css";
import Planet from "../../common/planet";

const PlanetDetail = ({
  planetList
}) => {
  const { planetId } = useParams();
  const planet = planetList.results.find((id) => id.url.split("/")[5] === planetId);

  return (
    <Planet planet={planet}/>
  );
};

const mapStateToProps = (state) => {
  return {
    planetList: state.planetsReducer ,
  };
};

export default connect(mapStateToProps, () => ({}))(PlanetDetail);
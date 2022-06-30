import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import "../People/styles.css";
import Planet from "../../common/planet";

const PlanetDetail = ({
  planetList
}) => {
  const { planetId } = useParams();
  const [planet, setplanet] = useState()
  console.log('planetddd', planetList)
  useEffect(() => {
    if(planetList){
      setplanet(planetList.find((id) => id.url.split("/")[5] === planetId))
    }
  }, [planetList, planetId])
  console.log('planet', planet)
  return (
    planet && <Planet planet={planet}/>
  );
};

const mapStateToProps = (state) => {
  return {
    planetList: state.planetsReducer.list,
  };
};

export default connect(mapStateToProps, () => ({}))(PlanetDetail);
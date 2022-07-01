import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import "../People/styles.css";
import Planet from "../../common/planet";
import { getMoviedBy } from "../../actions/moviesAction";

const PlanetDetail = ({
  planetList,
  getMoviedByAction
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
    planet && <Planet planet={planet} getMoviedByAction={getMoviedByAction}/>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMoviedByAction: (list) => getMoviedBy(dispatch, list)
})


const mapStateToProps = (state) => {
  return {
    planetList: state.planetsReducer.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetail);
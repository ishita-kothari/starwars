import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";
import Characters from "../../common/characters";

const PersonDetail = ({
  peopleList
}) => {
  const { peopleId } = useParams();
  const [person, setPerson] = useState()

  useEffect(() => {
    if(peopleList){
      setPerson(peopleList.find((id) => id.url.split("/")[5] === peopleId))
    }
  }, [peopleList, peopleId])
  
  return (
    person && <Characters person={person} />
    
  );
};

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleReducer.list,
    personDetail: state.peopleReducer.detail
  };
};

export default connect(mapStateToProps, () => ({}))(PersonDetail);


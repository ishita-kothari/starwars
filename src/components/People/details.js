import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";
import Characters from "../../common/characters";
import { getMoviedBy } from "../../actions/moviesAction";

const PersonDetail = ({
  peopleList,
  getMoviedByAction
}) => {
  const { peopleId } = useParams();
  const [person, setPerson] = useState()

  useEffect(() => {
    if(peopleList){
      setPerson(peopleList.find((id) => id.url.split("/")[5] === peopleId))
    }
  }, [peopleList, peopleId])
  
  return (
    person && <Characters person={person} getMoviedByAction={getMoviedByAction}/>
    
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMoviedByAction: (list) => getMoviedBy(dispatch, list)
})

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleReducer.list,
    personDetail: state.peopleReducer.detail,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetail);


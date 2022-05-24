import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { connect } from "react-redux";
import Characters from "../../common/characters";
import { getPeopleList, getPersonById } from "../../actions/peopleAction";

const PersonDetail = ({
  peopleList,
  getPeopleAction,
  getPersonByIdAction
}) => {
  const { peopleId } = useParams();
  const { search } = useLocation()
  
  console.log('person', peopleList, new URLSearchParams(search).get("page"), [search], performance)
  useEffect(() => {
    console.log('in effect')
    if(performance.navigation.type === 1) {
      console.log('in if')
      getPeopleAction(new URLSearchParams(search).get("page"))
      // getPersonByIdAction(peopleId)
    }
  
    
  }, [])
  // const person = peopleList.results.find((id) => id.url.split("/")[5] === peopleId);
  
  return (
    // <Characters person={person} />
    <></>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeopleAction: (page) => getPeopleList(dispatch, page),
    getPersonByIdAction: (id) => getPersonById(dispatch, id)
  };
};

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleReducer ,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetail);


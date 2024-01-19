import React from "react";
import"./notes.css";
import moment from 'moment';

function Notes(props){
  const currentDate = moment();
  const formattedDate = currentDate.format(' MMMM Do YYYY');

  return(
  <div className="outerbox" style={{backgroundColor:props.colour}}>
  <div className="title" ><h2>{props.title}</h2></div>
  <div className="description" ><textarea readOnly="readonly">{props.description}</textarea></div>
  <div className='date' style={{marginLeft:"5px"}}>{ formattedDate}</div>
</div>)
}

export default Notes;
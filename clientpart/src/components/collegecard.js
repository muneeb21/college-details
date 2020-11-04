import React from 'react';
import '../style.css';

function CollegeCard(props) {
    console.log(props);
  return (
    <div className="collegecard">
        <div className="collegename">
            {props.name}
        </div>
        <div className="noOfstudents">
            {props.noOfStudents}
        </div>
        <div className="collegestate">
            {props.state}
        </div>
        <div className="yearfounded">
            {props.yearFounded}
        </div>
        <div className="collegecourse">
            {props.coursesOffered}
        </div>
        
    </div>
  );
}



export default CollegeCard;
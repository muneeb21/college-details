import React from 'react';


function CollegeCard(props) {
  return (
    <div className="collegecard">
        <div className="collegename">
            {props.college.name}
        </div>
        <div className="noOfstudents">
            {props.college.noOfStudents}
        </div>
        <div className="collegeState">
            {props.college.state}
        </div>
        <div className="yearFounded">
            {props.college.yearFounded}
        </div>
        <div className="collegeCourse">
            {props.college.courses}
        </div>
    </div>
  );
}



export default CollegeCard;
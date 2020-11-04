import '../style.css';
import React from 'react';
import Chart from './chart';
import CollegeCard from './collegecard';
class App extends React.Component {

  constructor() {
    super();
    // defining the state at first
    this.state = 
    { collegeList: [],
      statesList:[],
      courseList:[],
      stateData:[],
      courseData:[],
      searchResult:{},
      isCharts:false,
      isSearch:true,
      isList:false,
      isSearchResult:false
    };
  }

  componentDidMount() {
    console.log("component mounted");
    fetch("http://localhost:8000/collegeList")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            // isLoaded: true,
            collegeList: result.data.collegeList,
            stateList:result.data.stateList,
            stateData:result.data.stateData,
            courseList:result.data.courseList,
            courseData:result.data.courseData,

          });
          console.log(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // this.setState({
            // isLoaded: true,
            console.log(error);
          // });
        }
      )
  }

   chartTabHandler=()=>{
    this.setState({
     isCharts:true,
     isSearch:false,
     isList:false,
     isSearchResult:false
    });
   }

   searchTabHandler=()=>{
    this.setState({
     isSearch:true,
     isCharts:false,
     isList:false,
     isSearchResult:false
    });
   }

   ListTabHandler=()=>{
    this.setState({
     isCharts:false,
     isSearch:false,
     isList:true,
     isSearchResult:false
    });
   }


   searchHandler=(e)=>{
    e.preventDefault();
     console.log(e.target.name.value);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: e.target.name.value })
  };
  fetch('http://localhost:8000/collegeDetails', requestOptions)
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        searchResult: result.data,
        isSearchResult:true
      });
      console.log(result.data);
       },
   
          (error) => {
           console.log(error);
      
        }
    )
    
   }

  render(){
    const isSearch=this.state.isSearch;
    const isCharts=this.state.isCharts;
    const isList=this.state.isList;
  return (
    <div className="App">
      <div className="heading">
      <h1  >COLLEGE APP</h1>
      </div>

      <div className="tabs">
        <div className="tab" onClick={this.chartTabHandler}>Charts</div>
      
      <div className="tab" onClick={this.searchTabHandler}>Search</div>
      
      <div className="tab" onClick={this.ListTabHandler}>List</div>
      </div>
      {isCharts && 
       <div className="charts">
       <div className="chart">
         <Chart 
         labels={this.state.stateList}
         data={this.state.stateData}
         label={"State-wise Chart"}       
         />
       </div>
       <div className="chart">
         <Chart
         labels={this.state.courseList}
         data={this.state.courseData}
         label={"Course-wise Chart"}
         />
       </div>
    </div>
      }
      
      {
        isSearch && 
        <div className="search">
          <h2>SEARCH HERE!</h2>
          <div className="form">
          <form className="mainform" onSubmit={this.searchHandler}>
          <input className="input" type="text" name="name" placeholder="Search College...."/>
          <input className="submit" type="submit" value="Search"/>
        </form>
          </div>
        
        
        </div>
      }
      {
        this.state.isSearchResult &&
        <div className="isSearchResult">
          <div className="searchResult listtitles"> 
            <CollegeCard 
             name={"College Name"}
             state={"State"}
             yearFounded={"Year Founded"}
             coursesOffered={"Courses Offered"}
             noOfStudents={"No. Of Students"}
             />
             </div>
        <div className="searchResult">
         <CollegeCard 
        
         name={this.state.searchResult.name}
         state={this.state.searchResult.state}
         yearFounded={this.state.searchResult.yearFounded}
         coursesOffered={"CSE IT ECE MECHANICAL CIVIL"}
         noOfStudents={"100"}
          />
        </div>
        </div>

      }

      {
        isList && 
        <div className="list">
          <div className="listtitles"> 
            <CollegeCard 
             name={"College Name"}
             state={"State"}
             yearFounded={"Year Founded"}
             coursesOffered={"Courses Offered"}
             noOfStudents={"No. Of Students"}
             />
          </div>
          {this.state.collegeList.map((college) =>(
            <CollegeCard 
            name={college.name}
            state={college.state}
             yearFounded={college.yearFounded}
             coursesOffered={"CSE, IT , ECE, MECHANICAL, CIVIL"}
             noOfStudents={"100"}
            />
          ))}
        </div>
      }


      
    </div>
  );
 }
}


export default App;

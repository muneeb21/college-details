
import React from 'react';
import Chart from './chart';
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
      isCharts:true,
      isSearch:false,
      isList:false
    };
  }

  componentDidMount() {
    fetch("localhost:8000/collegeList")
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
     isList:false
    });
   }

   searchTabHandler=()=>{
    this.setState({
     isSearch:true,
     isCharts:false,
     isList:false
    });
   }

   ListTabHandler=()=>{
    this.setState({
     isCharts:false,
     isSearch:false,
     isList:true
    });
   }


   searchHandler=(e)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: e.target.name.value })
  };
  fetch('localhost:8000/Details', requestOptions)
      .then(response => response.json())
      .then(result => this.setState({searchResult : result.data }));
   }

  render(){
    const isSearch=this.state.isSearch;
    const isCharts=this.state.isCharts;
    const isList=this.state.isList;
  return (
    <div className="App">
      <h1 style={styles.heading}>WELCOME!</h1>
      <div className="tabs">
        <div className="tab" onclick={this.chartTabHandler}>Charts</div>
      </div>
      <div>
      <div className="tab" onclick={this.searchTabHandler}>Search</div>
      </div>
      <div>
      <div className="tab" onclick={this.listTabHandler}>List of Colleges</div>
      </div>
      {isCharts && 
       <div classnname="chart">
       <div className="chart1">
         <Chart 
         labels={this.state.stateList}
         data={this.state.stateData}
         label="State-wise Chart"       
         />
       </div>
       <div className="chart2">
         <Chart
         labels={this.state.courseList}
         data={this.state.courseData}
         label="Course-wise Chart"
         />
       </div>
    </div>
      }
      
      {
        isSearch && 
        <div>
        <form onclick={this.searchHandler}>
          <input type="text" name="name" placeholder="Search College...."/>
          <input type="submit" value="Search"/>
        </form>
        <div className="searchResult">
         <CollegeCard college={this.state.searchResult} />
        </div>
        </div>
      }

      {
        isList && 
        <div className="list">
          {this.state.colllegeList.map((college) =>(
            <CollegeCard college={college} />
          ))}
        </div>
      }


      
    </div>
  );
 }
}


export default App;

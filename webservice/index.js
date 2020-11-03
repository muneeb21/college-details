const express=require('express'); 
const app = express();
const port = 8000;
const db = require('./config/mongoose');


// middleware parser to get the form values as the body object in request 
app.use(express.urlencoded());



// uncomment the below code once, run npm start then comment it again (its for manually entering admin)


const College=require('./models/college');
const Student=require('./models/student');
let city=["Banglore","Mumbai","Delhi","Noida"];
let state=["Karnataka","Maharashrta","Delhi","UP"];
let j=0;
for(let i=1;i<=10;i++){
if(j==4){
    j=0;
}
const collegeInfo={
    collegeId:"college"+i,
    name:"college"+i,
    yearFounded:2005,
    city:city[j],
    state:state[j],
    country:"India",
    numberOfStudents:100,
    courses:["Computer Science", "IT", "Electronics", "Electrical","Mechanical","Civil"],
}
College.create(collegeInfo,function(err){
    if(err){
        console.log(err);
        
    }
    return;
});

for(let k=1;k<=20;k++){
    const studentInfo={
        collegeId:"college"+i,
        name:"student"+k,
        yearOfBatch:2016,
        studentId:"student"+k,
        skills:["C++", "Java", "JavaScript"],
    }
    Student.create(studentInfo,function(err){
        if(err){
            console.log(err);
            
        }
        return;
    });

 }
 
  j++;
}

// using express router
app.use(express.json());


app.use('/',require('./routes'));
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});

const mongoose = require('mongoose');


// model schema for student
const collegeSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    collegeId: {
        type: String,
        unique: true
    },
    yearFounded: {
        type: Number,
    },
    
    city: {
        type: String,
        
    },
    state: {
        type: String,
        
    },
    country: {
        type: String,
        
    },
    noOfStudents: {
        type: Number,
        
    },
    courses:[ 
        {
        type: String,
        enum: ["Computer Science", "IT", "Electronics", "Electrical","Mechanical","Civil"]
        },
    ],
   
    
}, {
    timestamps: true
});






const College = mongoose.model('college', collegeSchema);

module.exports = College;
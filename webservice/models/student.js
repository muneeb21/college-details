const mongoose = require('mongoose');


// model schema for student
const studentSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    studentId: {
        type: String,
        
        unique: true
    },
    yearOfBatch: {
        type: Number,
        
    },
    collegeId: {
        type: String,
        
        
    },
    skills:[ 
        {
        type: String,
        
        },
    ],
   
    
}, {
    timestamps: true
});






const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
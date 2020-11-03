const College=require('../models/college');
const Student=require('../models/student');

module.exports.collegeDetails=async function(req,res){
 
    let college=await College.find({name:req.body.name});
    if(college){
        return res.json(200, {
            message: "Here are the college details!",
            data:college
        });
        
    }
    return res.json(422, {
        message: "Invalid college name"
    });
    
}

module.exports.collegeList=async function(req,res){
    let college=await College.find();
    if(college){
        return res.json(200, {
            message: "Here are the college details!",
            data:college
        });
        
    }
    return res.json(422, {
        message: "Invalid college name"
    });
}

module.exports.collegeByState=async function(req,res){
    let college=await College.find({state:req.body.state});
    let student= await Student.find({collegeId:req.body.collegeId});
    if(college){
        return res.json(200, {
            message: "Here are the college details!",
            colleges:college,
            students:student
        });
        
    }
    return res.json(422, {
        message: "Invalid college name"
    });
}

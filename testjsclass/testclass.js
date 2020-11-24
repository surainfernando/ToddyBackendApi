const mongoose = require('mongoose');
var StudentModel = require('./studentschema'); 
// mongoose.connect('mongodb+srv://projectuser:*****@individualproject.3gcox.mongodb.net/test?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {useNewUrlParser: true,useUnifiedTopology: true});
// const db = mongoose.connection;
var query = 'mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/project1?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const db = (query); 
mongoose.Promise = global.Promise; 

var newStudent = new StudentModel({StudentId:101, 
  Name:"Sam Wilkinson", Roll:1, Birthday:2001-09-08});
  
mongoose.connect(db, { useNewUrlParser : true,  
useUnifiedTopology: true }, function(error) { 
    if (error) { 
        console.log("Error!" + error); 
    } 
    else{  
  }

}); 
// newStudent.save(function(err, data) {
//       if(err) {
//           console.log(error);
//       }
//       else {
//           res.send("Data inserted");
//       }
//   });
var x="id"
StudentModel.findOne({StudentId:102}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{data[x]="rock rock"
        data.save()
            console.log(data)

        }
    });  

console.log("hellooo")
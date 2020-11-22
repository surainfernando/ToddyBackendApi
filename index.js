
const express = require('express')
var mysql = require('mysql'); 
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000
const bussinessman=require('./DatabaseTransactions/businessman.js');
const businessman = require('./DatabaseTransactions/businessman.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url='mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  console.log("------------------------------------------------------------");
  res.send('Hello World!')
})
app.get('/testcon', (req, res) => {
   
    res.send('Hello World!')
  })

  app.post('/businessman/register', (req, res) => {

    // const firstname=req.body.firstname
    // const lastname=req.body.lastname
    // console.log(lastname+" "+firstname)
    console.log("post------------------------------------------")
    var x={dd:"ddfdf"}
 let busi=new businessman();
 busi.registerBusinessman(req.body)
    console.log(req.body)
      res.send(x)
    })
    app.post('/businessman/login', (req, res) => {

      // const firstname=req.body.firstname
      // const lastname=req.body.lastname
      // console.log(lastname+" "+firstname)
      console.log("post------------------------------------------")
      var x={dd:"dd789fdf"}
  // let busi=new businessman();
   //const resultObj=  async busi.loginBusinessman2(req.body)

  // const  xv=busi.loginBusinessman(req.body)
  
   
      //console.log(resultObj)
      console.log("email888888888888888888888888888888888888888")
        //res.send(x)
        loginBusinessman(req.body,res)
      })
      function temp1(res)
      {res.send({a:1})}










/**Mongo db mportant functions */
async function findOne(res) {

  const client = await MongoClient.connect(url, { useNewUrlParser: true })
      .catch(err => { console.log(err); });

  if (!client) {
      return;
  }

  try {

      const db = client.db(dbName);

      let collection = db.collection('Students');

      let query = { StudentId: 102
       }

      let res = await collection.findOne(query);
      console.log(res)

     return res

  } catch (err) {

      console.log(err);
  } finally {

      client.close();
  }
}
function loginBusinessman(jsonObject,res)
{ console.log("loginmmmmmmm")
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       // var db =mongo.collection('Student')
       const col = client.db(dbName).collection('Businessman');
       var x=4;
       var y="owner2"
       var z=3
        try {
            col.findOne({email:jsonObject.email}, function(err, result) {
                if (err) { console.log("error") }
            
                if (result) {
                    console.log("email founf")
                    if(result.password===jsonObject.password)
                    {
                      console.log("pass crrect")
                       result.status=true;
                       res.send(result)
                      // return result
                       

                    }
                    else
                    {
                        console.log("fail")
                       var returnobj={status:false,email:true,password:false}
                       res.send(returnobj)
                     //  return returnobj

                    }

                    //return true
                    // we have a result
                } else {
                    console.log("email. misiisn")
                    var returnobj={status:false,email:false,password:false}
                    res.send(returnobj)
                    //return varobj
                    // we don't
                }
            })
          
            
    
        
         
        }
          catch(err) {
              console.log(err)
           
          }
      
    
       
        // const db = client.db(dbName);
        // db.Student.insertOne( {StudentId:104, 
        //     Name:"Sam Wilkinson jr", Roll:1, Birthday:2001-09-08} );
        client.close();
        return ;
      });
}





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

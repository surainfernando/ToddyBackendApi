
const express = require('express')
var mysql = require('mysql');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000
const bussinessman = require('./DatabaseTransactions/businessman.js');
const businessman = require('./DatabaseTransactions/businessman.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const url = 'mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';
var mysql = require('mysql');
const { makeDb } = require('mysql-async-simple');
const test101 = require('./test101');
const { Connection } = require('mongoose');
const Connections = require('./Connections.js')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'surain',
  database: 'Individual_Project'
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  console.log("------------------------------------------------------------");
  res.send('Hello World!')
})


app.post('/businessman/register', (req, res) => {


  // console.log("post------------------------------------------")
  // var x = { dd: "ddfdf" }
  // let busi = new businessman();
  // busi.registerBusinessman(req.body)
  // console.log(req.body)
  //res.send(x)
handleRegisterBusinessman(req,res)

})
app.post('/businessman/login', (req, res) => {

  // const firstname=req.body.firstname
  // const lastname=req.body.lastname
  // console.log(lastname+" "+firstname)
  console.log("post------------------------------------------")
  var x = { dd: "dd789fdf" }
  // let busi=new businessman();
  //const resultObj=  async busi.loginBusinessman2(req.body)

  // const  xv=busi.loginBusinessman(req.body)


  //console.log(resultObj)
  console.log("email888888888888888888888888888888888888888")
  //res.send(x)
  loginBusinessman(req.body, res)
})
app.get('/d', (req, res) => {
  console.log("------------------------------------------------------------");
  handleRegisterBusinessman(res)
  //res.send('Hello World!')
})


/*88888888888888888888888888888888888888888888888888*/
/* *Mysql Functions*/
async function handleRegisterBusinessman(req,res) {

  var results = await testForBusinessEmail(req)
  results=JSON.parse(JSON.stringify(results))
  if(results.length>0)
  {console.log("Eroor persist")
  
}
  else{
    console.log("No error ar")}

  
  //console.log("usera are")
  //console.log(t)
  res.send('Hello pppp99p999999999999999999999999999Wooooorld!') //



}



async function testForBusinessEmail(req) {


  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
  console.log(req.body.email)
  var xx=`select * from businessman where permit_number='${req.body.email}'`
  console.log(xx)

  try {
    const users = await db.query(connection1, `select * from businessman where email='${req.body.email}'`);
   // console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }


}

async function testForBusinessPermit() {


  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);

  try {
    const users = await db.query(connection1, `select * from businessman where permit_number='qll12'`);
    console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
    console.log('yfdfd')
    //l return users
  }


}








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

    let query = {
      StudentId: 102
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
function loginBusinessman(jsonObject, res) {
  console.log("loginmmmmmmm")
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    // var db =mongo.collection('Student')
    const col = client.db(dbName).collection('Businessman');
    var x = 4;
    var y = "owne/r2"
    var z = 3
    try {
      col.findOne({ email: jsonObject.email }, function (err, result) {
        if (err) { console.log("error") }

        if (result) {
          console.log("email founf")
          if (result.password === jsonObject.password) {
            console.log("pass crrect")
            result.status = true;
            res.send(result)
            // return result


          }
          else {
            console.log("fail")
            var returnobj = { status: false, email: true, password: false }
            res.send(returnobj)
            //  return returnobj

          }

          //return true
          // we have a result
        } else {
          console.log("email. misiisn")
          var returnobj = { status: false, email: false, password: false }
          res.send(returnobj)
          //return varobj
          // we don't
        }
      })





    }
    catch (err) {
      console.log(err)

    }



   
    client.close();
    return;
  });
}


function teyww(res) { res.send('sdsd') }
app.get('/d', (req, res) => {
  console.log("------------------------------------------------------------");
  test2(res)
  //res.send('Hello World!')
})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



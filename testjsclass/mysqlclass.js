var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port:      3306,
  password : 'surain',
  database:'Individual_Project'
})













// var x="rocdfdfdfk"
// var y="dock"
// var z=`Hello my name is ${x},${y}`
// var z=new Date().toISOString().slice(0, 19).replace('T', ' ');
//console.log(z)

//basicSelect();

//basicinsert()
function basicSelect(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `select * from businessman2 where permit_number='cc'`;
    //var sql = `Insert into Businessman3(permit_number,date_created,nic) values('${x}','${z}','${y}')`;
    //var sql = `Insert into Businessman2(permit_number,nic) values('${x}','${y}')`;


    con.query(sql, function (err, result) {
      if (err) throw err;
      var x=result;
      var z=x[0]
      var results=JSON.parse(JSON.stringify(result))
     // var resultArray = Object.values(JSON.parse(JSON.stringify(rows)))
     var x=results[0]
      
      console.log(results);
      console.log(x.nic)
      con.end();
    });
  });

 }







 function basicinsert(){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `Insert into Businessman3(permit_number,date_created,nic) values('${x}','${z}','${y}')`;
    //var sql = `Insert into Businessman2(permit_number,nic) values('${x}','${y}')`;


    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
      con.end();
    });
  });

 }
 test1()
 async function test1()
 { var x7=  await checker()
   console.log("size is +"+x7)

 }
 


  async function checker()
 {
  var x= await con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `select * from businessman where permit_number='q1oo2'`;
    //var sql = `Insert into Businessman3(permit_number,date_created,nic) values('${x}','${z}','${y}')`;
    //var sql = `Insert into Businessman2(permit_number,nic) values('${x}','${y}')`;


    var t= con.query(sql, function (err, result) {
      if (err) throw err;
      var x=result;
      var z=x[0]
      var results=JSON.parse(JSON.stringify(result))
     // var resultArray = Object.values(JSON.parse(JSON.stringify(rows)))
     var x=results.length
     if(x>0)
     { console.log("connection is enfdinfg //end place")
     con.end();
     return x;

     }
     
      
     // console.log(results);
     // console.log(x.name)
     console.log("connection is enfdinfg //end place")
      con.end();
      return x;
    });
  });


 }

// $host="localhost";
// $port=3306;
// $socket="";
// $user="root";
// $password="";
// $dbname="";

// $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
// 	or die ('Could not connect to the database server' . mysqli_connect_error());



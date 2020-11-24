var mysql      = require('mysql');
const { makeDb } = require('mysql-async-simple');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port:      3306,
  password : 'surain',
  database:'Individual_Project'
});

module.exports={
    sum: async function(a,b) {
        return "a+b"
    },
    multiply: function(a,b) {
        return a*b
    },
    test2:async  function test2(res)
{
  
  
  await testJS()
  console.log('hellttto')
  res.send('Hello Wooooorld!') //
  
  
},


testjs:async function()
{
  

 

const db = makeDb();
await db.connect(connection);
 
try {
    const users = await db.query(connection, `select * from businessman where permit_number='q12'`);
    console.log(users)
} catch (e) {
    // handle exception
} finally {
    console.log('fdfd1')
    await db.close(connection);
    console.log('fdhfd')
}


}
};
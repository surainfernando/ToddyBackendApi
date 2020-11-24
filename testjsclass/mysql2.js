var mysql      = require('mysql');
const { makeDb } = require('mysql-async-simple');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port:      3306,
  password : 'surain',
  database:'Individual_Project'
});

test2()
async function test2()
{
  
  
  await testJS()
  console.log('hello')

  
  
}


async function testJS()
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
    console.log('fdfd')
}


}
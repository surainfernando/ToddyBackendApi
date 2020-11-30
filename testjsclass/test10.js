
const url = 'mongodb+srv://projectuser:IiMo2111@individualproject.3gcox.mongodb.net/?authSource=admin&replicaSet=atlas-d3t620-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const dbName = 'project1';
var mysql = require('mysql');
const Connections = require('../Connections.js')
const { makeDb } = require('mysql-async-simple');

//Variable declaration
var arrayWithPerTree=[];
var arrayAverage=[]
//Variable declaration








handegetBottle()
//calculateMedian()
//average1()

async function handegetProducers()
{ //get details of all bottles . not customer one bottle
  var results = await getProducers()

  results=JSON.parse(JSON.stringify(results))
  console.log(results)
  average1(results)



}

async function getProducers() {
//get details of all bottles . not customer one bottle

  var connection11 = new Connections()
  var connection1 = connection11.mySQLConnection()

  const db = makeDb();
  await db.connect(connection1);
 // console.log(req.body.email)
  var xx=`select * from businessman where business_type='Toddy Producer '`
  //console.log(xx)

  try {
    const users = await db.query(connection1,xx);
  // console.log(users)
    return users
  } catch (e) {
    // handle exception
  } finally {
    console.log('fdfd1')
    //await db.close(connection1);
   // console.log('yfdfd')
    //l return users
  }
}

function average1(results)
  {

    for(i=0;i<results.length;i++)
    {
      var obj=results[i]
      var avg=obj.volume/obj.no_of_trees
      obj.average=avg;
      arrayWithPerTree.push(obj)
      arrayAverage.push(avg)
    }
    //console.log(arrayWithPerTree)
    setAverage()

      //var x=results[0]
     // console.log(x)


  }
  function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


  function setAverage()
  {
    
    var len = arrayWithPerTree.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arrayAverage[j] >arrayAverage[j+1]){
                swap(arrayAverage, j, j+1);
                swap(arrayWithPerTree, j, j+1);
            }
        }
    }
    console.log(arrayWithPerTree)
    calculateMedian()

  }

  function calculateMedian()
  {
    var length=arrayWithPerTree.length;
    

    
   var c=length%2
   if(c==1)
   { length=length+1
     var loc=length/2
     var median=arrayAverage[loc-1]
     console.log("Position "+loc+"Array val"+loc-1)
     console.log('Median='+median)

    
   }
   else{
    
    var loc=length/2
    var median=(arrayAverage[loc-1]+arrayAverage[loc])/2
    console.log('Median='+median)
    console.log("Position "+loc)
    console.log("even")
   }
  var x=9/2
  console.log(x)

  }
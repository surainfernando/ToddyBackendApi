// var x= Date.now();
// var y=new Date(2020,10,24)
// var c=new Date(2020,10,25)

// var z=new Date(2020,10,26)
// var w=new Date(2020,10,27)
var z=new Date().toISOString().slice(0, 19).replace('T', ' ');
console.log(z)

var y=new Date(2020,10,26)
var q=y.toISOString().slice(0, 19).replace('T', ' ');
var z=new Date().toISOString().slice(0, 19).replace('T', ' ');

console.log(q)

if(q<z)
{console.log("lower")}

// if(x>=z)
// {console.log("greater")}
// else{console.log("lower")}

//console.log(y)
//onsole.log(x)/////
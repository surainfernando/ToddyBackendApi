
var mongoose=require('mongoose'); 
  
var CustomerSchema = new mongoose.Schema({ 
    CustomerId:Number, 
    Name:String, 
    Email:String,
    Password:String,
}); 
  
module.exports = mongoose.model( 
    'customer', CustomerSchema, 'Customers'); 
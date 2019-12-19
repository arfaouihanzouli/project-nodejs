var mongodb = require('mongodb');
var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/project";

const table = "reponse"
const base = "project"



exports.saveRp =  (myobj)=>
{
    
     return new Promise ((resolve, reject)=>{
       
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(base);
            
            dbo.collection(table).insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              resolve("good")
              db.close();
            });
          });
      })
    

      
}
exports.getAll =  (titreReq)=>
{
    
    
     return new Promise ((resolve, reject)=>{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(base);
            
            dbo.collection(table).find({}).toArray(function(err, result) {
              if (err) throw err;
             
              resolve(result)
              
              db.close();
            })
          })
       
      })
    
}
exports.getAllDistinctEmail =  (titreReq)=>
{
    
    
     return new Promise ((resolve, reject)=>{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(base);
            
            dbo.collection(table).distinct("email",function(err, result) {
              if (err) throw err;
              
              resolve(result)
              
              db.close();
            })
          })
       
      })
    
}
exports.getAllBytitre =  (titreReq)=>
{
    
    
     return new Promise ((resolve, reject)=>{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(base);
            var query = { titre: titreReq};
            dbo.collection(table).find(query).toArray(function(err, result) {
              if (err) throw err;
             
              resolve(result)
              
              db.close();
            })
          })
       
      })
    
}
exports.getAllByEmail =  (titreReq)=>
{
    
    
     return new Promise ((resolve, reject)=>{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(base);
            var query = { email: titreReq};
            dbo.collection(table).find(query).toArray(function(err, result) {
              if (err) throw err;
             
              resolve(result)
              
              db.close();
            })
          })
       
      })
    
}
exports.findQuery =  (query)=>
{
    console.log("jjjjj")
    
     return new Promise ((resolve, reject)=>{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(base);
            
            dbo.collection(table).find(query).toArray(function(err, result) {
              if (err) throw err;
              //console.log(result)
              resolve(result)
              
              db.close();
            })
          })
       
      })
    
}
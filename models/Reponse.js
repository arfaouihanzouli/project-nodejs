var mongodb = require('mongodb');
var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/project";

const table = "reponse"
const base = "project"



exports.saveRp =  (myobj)=>
{
    console.log("rp")
    
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
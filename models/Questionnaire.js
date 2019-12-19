var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/project";

const table = "questionnaire"
const base = "project"


exports.getall =  ()=>
{
    console.log("jjjjj")
    
     return new Promise ((resolve, reject)=>{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(base);
            dbo.collection(table).find({}).toArray(function(err, result) {
              if (err) throw err;
              //console.log(result)
              resolve(result)
              
              db.close();
            })
          })
       
      })
    
}
exports.saveqte =  (myobj)=>
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
exports.getByTitre =  (titreReq)=>
{
    
    
     return new Promise ((resolve, reject)=>{
      
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(base);
        var query = { titre: titreReq};
        dbo.collection(table).findOne(query, function(err, result) {
          if (err) throw err;
          resolve(result);
          db.close();
        });
      });
      })
    

      
}
exports.test =  ()=>
{
    console.log("jjjjj")
    
     return new Promise ((resolve, reject)=>{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(base);
            var query = { 'questionsSimples.titreQuestionSimple' : 'Votre nom?'};
            dbo.collection(table).find(query).toArray(function(err, result) {
              if (err) throw err;
              //console.log(result)
              resolve(result)
              
              db.close();
            })
          })
       
      })
    
}
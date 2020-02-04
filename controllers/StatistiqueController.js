const Reponse = require('./../models/Reponse');
const Questionnaire = require('./../models/Questionnaire');


exports.StQte = async (req , res , next)=>
{ 
 
    
   qte = await Questionnaire.getall()
         
      var resArr = [];
       for (const key in qte) {
          
           rp = await Reponse.getAllBytitre(qte[key].titre)

           resArr.push({
            titre: qte[key].titre,
            nbrRep: rp.length
        });
           
       }
  
 
   res.send(resArr)
}
exports.StPersonne = async (req , res , next)=>
{ 
 
    
   rp = await Reponse.getAllDistinctEmail()
         
    var resArr = [];
       for (const key in rp) {
          
          resRp = await Reponse.getAllByEmail(rp[key])
           
           resArr.push({
            email: rp[key],
            nbrRep:resRp.length
        });
           
       }
  
 
   res.send(resArr)
}
exports.StPersonneQte = async (req , res , next)=>
{ 
 
    
   rp = await Reponse.getAllDistinctEmail()
         
    var res1Arr = [];
       for (const key in rp) {
          
          resRp = await Reponse.getAllByEmail(rp[key])
           
           res1Arr.push({
            email: rp[key],
            nbrRep:resRp.length
        });
           
       }
  
       qte = await Questionnaire.getall()
         
      var res2Arr = [];
       for (const key in qte) {
          
           rp = await Reponse.getAllBytitre(qte[key].titre)

           res2Arr.push({
            titre: qte[key].titre,
            nbrRep: rp.length
        });
           
       }
       var resArr = [];
       resArr.push({
         personne: res1Arr,
         questionnaire: res2Arr
     });
   res.send(resArr)
}
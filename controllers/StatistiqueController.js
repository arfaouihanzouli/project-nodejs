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
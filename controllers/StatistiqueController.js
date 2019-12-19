const Reponse = require('./../models/Reponse');
const Questionnaire = require('./../models/Questionnaire');


exports.StQte = async (req , res , next)=>
{ 
 
    
   qte = await Questionnaire.getall()
         
      var resArr = [];
       for (const key in qte) {
           console.log(qte[key].titre)
           rp = await Reponse.getAllBytitre(qte[key].titre)
           console.log(rp)
           console.log(rp.length)
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
           console.log(rp[key])
          resRp = await Reponse.getAllByEmail(rp[key])
           console.log(resRp)
           console.log(resRp.length)
           resArr.push({
            email: rp[key],
            nbrRep:resRp.length
        });
           
       }
  
 
   res.send(resArr)
}
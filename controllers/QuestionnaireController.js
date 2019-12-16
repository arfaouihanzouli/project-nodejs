const Questionnaire = require('./../models/Questionnaire');

exports.addQte = async (req , res , next)=>
{ 
   
   client = await Questionnaire.saveqte(req.body) 
   console.log(client)
    
}
exports.allqte = async (req , res , next)=>
{ 
 
   qte = await Questionnaire.getall() 
 
  res.send(qte)
    
}
exports.qteByTitre = async (req , res , next)=>
{ 
 
    console.log(req.params.titre)
   qte = await Questionnaire.getByTitre(req.params.titre) 
 
   res.send(qte)
}
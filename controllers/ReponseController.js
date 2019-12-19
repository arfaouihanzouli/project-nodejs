const Reponse = require('./../models/Reponse');
const Questionnaire = require('./../models/Questionnaire');

exports.addRp = async (req , res , next)=>
{ 
   console.log(req.body.titre)
   qte = await Questionnaire.getByTitre(req.body.titre)
   if(qte !== null)
   { 
      client = await Reponse.saveRp(req.body) 
      console.log(client)
     res.send({sucees : true , msg : " bien effectué  ! "})

   }
  else
  {
       res.send({sucees : false , msg : "choix invalide ! "})
  }
 
    
}
exports.RpByTitre = async (req , res , next)=>
{ 
 
    console.log(req.params.titre)
   qte = await Reponse.getAllBytitre(req.params.titre)


  
 
   res.send(qte)
}
exports.test = async (req , res , next)=>
{ 
 
    console.log(req.params.titre)
    console.log(req.params.question)
    
    var query = { "qcm.question" : req.params.question,"qcm.reponse": "Homme"};
   qte = await Reponse.findQuery(query)


  
 
   res.send(qte)
}
const Reponse = require('./../models/Reponse');

exports.addRp = async (req , res , next)=>
{ 
   
   client = await Reponse.saveRp(req.body) 
   console.log(client)
    
}
exports.qteByTitre = async (req , res , next)=>
{ 
 
    console.log(req.params.titre)
   qte = await Reponse.getAllBytitre(req.params.titre)


  /* ab= qte.questionsSimples
   for(var a in ab){
      console.log(ab[a].titreQuestionSimple);
  }*/
 
   res.send(qte)
}
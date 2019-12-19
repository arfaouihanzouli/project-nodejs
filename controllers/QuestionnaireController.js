const Questionnaire = require('./../models/Questionnaire');

exports.addQte = async (req , res , next)=>
{ 
    //console.log(req.body.titre)
   qte = await Questionnaire.getByTitre(req.body.titre)
   if(qte == null)
    { 
      client = await Questionnaire.saveqte(req.body) 
      res.send({sucees : true , msg : " bien effectué  ! "})

    }
   else
   {
        res.send({sucees : false , msg : "deja existe ! "})
   }
   
    
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


  /* ab= qte.questionsSimples
   for(var a in ab){
      console.log(ab[a].titreQuestionSimple);
  }*/
 
   res.send(qte)
}
exports.test = async (req , res , next)=>
{ 
 
    
   qte = await Questionnaire.test()


  /* ab= qte.questionsSimples
   for(var a in ab){
      console.log(ab[a].titreQuestionSimple);
  }
   ab= req.body.qcm
     for(var a in ab){
        console.log(ab[a].titreQuestion);
        ac=ab[a].options
        for(var b in ac){
         console.log(ac[b].titreOption);
     }
    }*/
 
   res.send(qte)
}
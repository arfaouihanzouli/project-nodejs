const Questionnaire = require('./../models/Reponse');

exports.addRp = async (req , res , next)=>
{ 
   
   client = await Questionnaire.saveRp(req.body) 
   console.log(client)
    
}

const express = require('express')
const app = express()
app.use(express.json());


//------------------requireController----------------------------//
const QteControler=  require('./controllers/QuestionnaireController')
const RpControler=  require('./controllers/ReponseController')
//---------------------------route_qte ---------------------------------/
app.post('/qte',QteControler.addQte)
app.get('/allQte',QteControler.allqte)
app.get('/Qte/:titre',QteControler.qteByTitre)
//---------------------------route_reponses ---------------------------------/
app.post('/rp',RpControler.addRp)

app.listen(3000, ()=> {
    console.log('serveur 3000')
})
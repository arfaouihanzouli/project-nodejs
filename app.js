const express = require('express')
const app = express()
app.use(express.json());
var cors = require('cors')


app.use(cors())


//------------------requireController----------------------------//
const QteControler=  require('./controllers/QuestionnaireController')
const RpControler=  require('./controllers/ReponseController')
const StControler=  require('./controllers/StatistiqueController')
//---------------------------route_qte ---------------------------------/
app.post('/qte',QteControler.addQte)
app.get('/allQte',QteControler.allqte)
app.get('/test',QteControler.test)
app.get('/Qte/:titre',QteControler.qteByTitre)
//---------------------------route_reponses ---------------------------------/
app.post('/rp',RpControler.addRp)
app.get('/Rp/:titre',RpControler.RpByTitre)
app.get('/Rp/:titre/:question',RpControler.test)
//---------------------------statistic----------------------------------------/
app.get('/St/question',StControler.StQte)
app.get('/St/Person',StControler.StPersonne)
app.get('/St',StControler.StPersonneQte)
app.listen(3000, ()=> {
    console.log('serveur 3000')
})
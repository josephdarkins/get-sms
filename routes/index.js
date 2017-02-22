var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data/', function(req, res, next){
   //console.log(req.body);      // your JSON

   json={'players':[
            {'name':"Messi", 'goals':8},            
            {'name':"Ronaldo", 'goals':22},
            {'name':"Costa", 'goals':20},
            {'name':"Neymar", 'goals':13},
            {'name':"Arabi", 'goals':6},
            {'name':"Bale", 'goals':3},
            {'name':"Toquero", 'goals':0}]};

    JSON.stringify(json);

   res.render('data', { data: json, title: 'joes page' });
})

router.post('/data/', function(req, res, next){
   //console.log(req.body);      // your JSON

   var jsonBody = JSON.stringify(req.body);

   console.log(jsonBody);
   console.log("Body: " + JSON.stringify(req.body.BODY));
   console.log("From: " + JSON.stringify(req.body.MONUMBER));
   console.log("To: " + JSON.stringify(req.body.DESTINATION));
   console.log("Time: " + JSON.stringify(req.body.RECEIVETIME));
   console.log("GUID: " + JSON.stringify(req.body.GUID));

   res.end("yes");
})

module.exports = router;


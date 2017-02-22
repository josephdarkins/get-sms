var express = require('express');
var router = express.Router();

var LastSMS = "";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data/', function(req, res, next){

   if(LastSMS == ""){
      res.render('Send');
   }else{
      res.render('SMS', { data: LastSMS, title: 'Received SMS' });
   }

})

router.post('/data/', function(req, res, next){

   var jsonBody = JSON.stringify(req.body);

   console.log(jsonBody);
   console.log("Body: " + JSON.stringify(req.body.BODY));
   console.log("From: " + JSON.stringify(req.body.MONUMBER));
   console.log("To: " + JSON.stringify(req.body.DESTINATION));
   console.log("Time: " + JSON.stringify(req.body.RECEIVETIME));
   console.log("GUID: " + JSON.stringify(req.body.GUID));

   LastSMS = JSON.stringify(req.body);

   res.end();
})

module.exports = router;


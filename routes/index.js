var express = require('express');
var router = express.Router();
var twilio = require('twilio');

 

var client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
console.log('set the stuff');

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

  console.log(req.body.Body);
  console.log(req.body.From);  
  response.send("<Response><Message>" + req.body.Body + "</Message></Response>");

   var jsonBody = JSON.stringify(req.body);

   console.log(jsonBody);
   console.log("Body: " + JSON.stringify(req.body.BODY));
   console.log("From: " + JSON.stringify(req.body.MONUMBER));
   console.log("To: " + JSON.stringify(req.body.DESTINATION));
   console.log("Time: " + JSON.stringify(req.body.RECEIVETIME));
   console.log("GUID: " + JSON.stringify(req.body.GUID));

   LastSMS = JSON.stringify(req.body);
   
   
      client.sendMessage({
      to: '+447977727374',
      from: JSON.stringify(req.body.DESTINATION),
      body: 'Hello from Twilio!'
     });
   

   res.end();
})


//TODO: This is where I need to put the key value pairs for request response
// process.env.TWILIO_SID to get the SID for the SMS

//TODO: Shall I do this through a database? Or just through JSON?

module.exports = router;


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
  
   console.log(jsonBody);
   console.log("Body: " + req.body.Body);
   console.log("From: " + req.body.From);
   console.log("To: " + req.body.To);

   LastSMS = req.Body;
   
   console.log('sending message');
    client.sendMessage({
      to: '+447977727374',
      from: '+441133206457',
      body: 'Hello from Twilio!'
    });
    console.log('sent');
   

   res.end();
})


//TODO: This is where I need to put the key value pairs for request response
// process.env.TWILIO_SID to get the SID for the SMS

//TODO: Shall I do this through a database? Or just through JSON?

module.exports = router;


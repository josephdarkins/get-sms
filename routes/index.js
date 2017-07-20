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

   
   console.log("Body: " + req.body.Body);
   console.log("From: " + req.body.From);
   console.log("To: " + req.body.To);

   client.messages.create({
        to: "+447977727374",
        from: "+441133206457",
        body: "There has been a test message"
      });

   LastSMS = req.body.Body;
   
   if(req.body.Body == "This is the time"){
      console.log('sending message');
      client.messages.create({
        to: req.body.From,
        from: req.body.To,
        body: "This really is the time!!"
      });
      console.log('sent');
   }
   if(req.body.Body == "Kieran"){
      console.log('sending message');
      client.messages.create({
        to: req.body.From,
        from: req.body.To,
        body: "K-Dog, you have fun at the Cricket last night?"
      });
      console.log('sent');
   }
   if(req.body.Body == "Tamara"){
      console.log('sending message');
      client.messages.create({
        to: req.body.From,
        from: req.body.To,
        body: "Hello Tamara, your next clue is -who serves coffee at RateSetter?-."
      });
      console.log('sent');
   }
   else{
      console.log('sending message');
      client.messages.create({
        to: req.body.From,
        from: req.body.To,
        body: "I don't understand. Please text 'Tamara' or 'Kieran' for more."
      });
      console.log('sent');
   }

   res.end();
})


//TODO: This is where I need to put the key value pairs for request response
// process.env.TWILIO_SID to get the SID for the SMS

//TODO: Shall I do this through a database? Or just through JSON?

module.exports = router;


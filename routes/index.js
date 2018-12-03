var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'alumni' });
});
router.post('/',function(req,res){
  // Read form data to an object
  var text=req.body;
  // Get existing ideas in file as an array of objects
  var existingIdeas = JSON.parse(fs.readFileSync("ideas.json")).ideas;
  // Add our new idea object to the end of the array
  existingIdeas.push({
    name:text.stdname,
    branch:text.branch,
    arrivalstat:text.arrivalstat,
    meetingtype:text.meetingtype,
  });
  console.log(existingIdeas);

  // Create new object to write to file
  var pusher = {
    ideas: existingIdeas
  }
  console.log(pusher);
  // Write the modified array back to the same file
  fs.writeFileSync("ideas.json", JSON.stringify(pusher));
  // Respond to the user
  res.send("submitted! ")
});

router.get('/list', function(req, res) {
  ideas = JSON.parse(fs.readFileSync('ideas.json')).ideas;
  console.log(ideas);
  res.render('list', { sheet: ideas });
});
module.exports = router;

var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res){
  // Read form data to an object
  var text=req.body;
  // Get existing ideas in file as an array of objects
  var existingIdeas = JSON.parse(fs.readFileSync("ideas.json")).ideas;
  // Add our new idea object to the end of the array
  existingIdeas.push({
    name: text.stdname,
    branch:text.branch,
    idea:text.idea,
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
  res.send("submitted! 69")
})
module.exports = router;

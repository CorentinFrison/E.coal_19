const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizzes = db.quizzes;




router
 .use(express.static('resources'))
 .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded
  .get("/users", (req, res) => {
    Users
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  }).get("/quizz/:id", (req, res) => {
    Quizzes.findOne({
        _id: req.params.id
    }).exec((err, data) => {
        if (err) return res.status(500).send(err);
        else  {
          console.log(data);
            res.json(data);
        }
    });
  }) 
  .get('/quizzes', (req, res) => {
    Quizzes.find({})
          .exec((err, data) => {
            if (err) {
              return res.status(500).send(err);
              console.log(err);
            }
            else{
            console.log(data)
              res.json(data);
          }})
  })
  .post('/upload', (req, res) => {
    console.log(req.files);
    req.files.file.mv(__dirname + '/resources/pictures/' + req.files.file.name,
        (err) => {
          if (err)
            return res.status(500).send(err);
          res.json({file: req.files.file.name});
        }
      );
  })        
  .post("/createquiz", (req, res) => {
    const q = new Quizzes(req.body);    // The json object is the body of the request
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"));
  })          
  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  })
  ;


module.exports = router;

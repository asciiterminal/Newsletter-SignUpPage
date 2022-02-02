//jshint esversion: 6

const express = require("express")
const bodyParser  = require("body-parser")
const request = require("request")

const app = express();

app.use(express.static("public"));//We used {express.static} because when we tend to bring
//a local/static file online i.e localhost:{port} it does't recognize the files that are within the local
//storage of stylesheets i.e {.css} or other preliminary hence we in the following had to Name
//the express.static with the incubation of "public" folder by which we can allow
//local/static stylesheets and other files to be able to come online.

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname  + "/signup.html");
});

app.post("/", function(req,res){

var firstName = req.body.fName;
var lastName = req.body.lName;
var email = req.body.email;

console.log(firstName,lastName,email);

});

app.listen(3000,function(){
  console.log("Server is running on port 3000");

});

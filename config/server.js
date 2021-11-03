var express = require ("express") 
var app = express ()
var consign = require ("consign")

app.set ("view engine", "ejs")
app.use (express.static("./"))
app.use (express.urlencoded({extended:true}))
var porta = process.env.PORT || 1313 

consign().include('./routes').into(app)
module.exports = {app,porta}
const express = require("express");

const routes = require("./routes/routes.js");
const app = express();


app.use(express.json())

app.use(express.urlencoded({
  extended:true
})); 


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
  });

app.use(routes);

//app.use('/api', passport.authenticate('jwt', {session: false}), secureroutes);
app.listen( 4000, () => { 
  console.log("Server started listening on port: 4000");
});
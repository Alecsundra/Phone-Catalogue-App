const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

const obj= require('./AllPhones')
    
app.get('/', (req, res) => {
        res.send("All Phones App")
    });

app.get('/phones', (req, res) => {
    res.send(obj)
});



app.listen(port, err => {
    if (err) {
      throw new Error("There was an error");
    }
    console.log(`Server is listening on ${port}`);
  });
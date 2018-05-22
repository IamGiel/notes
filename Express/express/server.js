const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const birds = require("./birds/birds");
const admin = require("./admin/admin");

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 

app.use('/birds', birds)
app.use('/admin', admin);
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log('🌎 is listening on port', PORT);
});
















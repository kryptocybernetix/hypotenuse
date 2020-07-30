const express = require('express');
const { solve } = require('../pkg/hypotenuse_lib.js');

const app = express();
const port = 8080;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/solve', function (req, res) {
  var a = parseFloat(req.body.a);
  var b = parseFloat(req.body.b);
  res.send(solve([a, b]))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

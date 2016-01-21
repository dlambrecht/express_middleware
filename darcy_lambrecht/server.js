const express = require('express');
const app = express();

function jsonParser(req, res, next) {
  var data = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    try {
      req.body = JSON.parse(data);
      console.log('parse successful');
      next();
    }
    catch(err) {
      res.status(400)
      console.error('invalid json');
      res.end('invalid json\n');
      console.error(err);
    }
  });
}

app.use(jsonParser);

app.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});

app.get('/', (req, res) => {
  res.status(200).json({msg: req.body});
});


app.listen(3000, () => console.log('server up'));

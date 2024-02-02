// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
  const formData = req.body;

  // Process and store form data (you can use a database here)
  // For simplicity, appending to a file in this example
  fs.appendFile('formDB.txt', JSON.stringify(formData) + '\n', (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Form data successfully appended to file');
      res.status(200).send('Form data submitted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

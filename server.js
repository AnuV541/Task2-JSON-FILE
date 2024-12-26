const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
var num=0;
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  
});

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // To make it unique in case if the name is same we can use Date.now. Since its hard to read I have added the email ID of the candidates.

  const fileName = `${formData.fullName.replace(/\s+/g, '-').toLowerCase()}-${formData.email.replace(/[@.]/g, '-')}-data.json`;
  const filePath = path.join(__dirname, fileName);
  
  fs.writeFile(filePath, JSON.stringify(formData, null, 2), (err) => {
      if (err) {
          return res.status(500).json({ message: 'Error saving data', error: err });
      }
      res.status(200).json({ message: 'Form data saved successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

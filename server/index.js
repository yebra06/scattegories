const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// Connect to local database.
// TODO: Add config/
mongoose.connect('mongodb://localhost:27017/scattergories', {useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log('connection to db successful'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8088;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('./routes'));
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => console.log(`\nServer started...\nListening on port ${PORT}`));

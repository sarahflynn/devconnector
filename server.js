const express = require('express');
const mongoose = require('mongoose');
require('./util/connect')();

const app = express();

app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));

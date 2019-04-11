#!/usr/bin/env node
"use strict";

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// the GET route
app.get('/hello', (req, res) => {
	res.send({ express: 'hello world! :)'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

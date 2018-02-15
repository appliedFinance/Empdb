'use strict';
const say = (s) => { console.log(s); };
const express = require('express');
const app = express();

const routes = require('routes.js');

//app.use("/employees", routes.employees);
app.use("/api/employees", routes.employees);







app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));

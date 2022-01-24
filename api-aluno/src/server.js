const express = require('express')

const app = express();

require("dotenv").config({});

const routes = require('./routes')

app.use(express.json());

app.use("/v1", routes);

app.listen(process.env.port, () => {
  console.log(`process on port: ${process.env.PORT} 🚀`)
})

"use-strict";

import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/appRoutes";

const app = express();
const port = 8000;

routes(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(port);
console.log("The server is running on port " + port);

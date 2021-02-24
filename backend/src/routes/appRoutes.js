"use-strict";

import cors from "cors";
import middleware from "./middleware";
import { products_by_query, product_by_id } from "../controllers";

const originsWhitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
};

export default (app) => {
  middleware(app);
  app.get("/", cors(corsOptions), (req, res) => {
    res.json({ message: "The server is working!" });
  });
  app.get("/search", cors(corsOptions), products_by_query);
  app.get("/item/:id", cors(corsOptions), product_by_id);
};

"use strict";
"use-strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.route("/test").get(function (req, res) {
    res.send("Response test");
  });
};
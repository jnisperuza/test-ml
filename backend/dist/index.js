"use strict";
"use-strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _appRoutes = require("./routes/appRoutes");

var _appRoutes2 = _interopRequireDefault(_appRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 8000;
(0, _appRoutes2.default)(app);

app.use(function (req, res) {
  res.status(404).send("Not found");
});

app.listen(port);
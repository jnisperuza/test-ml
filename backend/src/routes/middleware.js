"use-strict";

export default (app) => {
  app.use((req, res, next) => {
    var temp = res.send;
    res.send = function () {
      if (req.url.includes("search")) {
        arguments[0] = mapResults(arguments);
      }
      if (req.url.includes("item")) {
        arguments[0] = mapItem(arguments);
      }
      temp.apply(this, arguments);
    };
    next();
  });
};

const author = {
  name: "Jeison",
  lastname: "Nisperuza",
};

const mapResults = (args) => {
  if (args && args?.length) {
    const data = JSON.parse(args[0]);
    const mapped = {
      author,
      categories: data.map((item) => item.category_id),
      items: data,
    };
    return JSON.stringify(mapped);
  }
};

const mapItem = (args) => {
  if (args && args?.length) {
    const data = JSON.parse(args[0]);
    const mapped = {
      author,
      item: data,
    };
    return JSON.stringify(mapped);
  }
};

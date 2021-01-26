var db = require("../models");

module.exports = (app) => {
    // get route to pull down all orders
  app.get("/api/orders", (req, res) => {
    db.Order.findAll().then((dbOrder) => res.json(dbOrder));
  });
  // route to input the "order form" into the Order table
  app.post("/api/orderform", (req, res) => {
    db.Order.create(req.body).then((dbOrder) => {
      res.json(dbOrder);
    });
  });
};

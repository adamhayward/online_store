var db = require("../models");

module.exports = (app) => {
    //   retrieves all "items" from the inventory table
    app.get("/api/total", (req, res) => {
        db.Total.findAll().then((dbTotal) => res.json(dbTotal));
      });
      // post route to add new items to inventory (future option)
      app.post("/api/total", (req, res) => {
        db.Total.create(req.body).then((dbTotal) => res.json(dbTotal));
      });
};

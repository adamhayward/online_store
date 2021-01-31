var db = require("../models");

module.exports = (app) => {
  //   retrieves all "items" from the inventory table
  app.get("/api/inventory", (req, res) => {
    db.Inventory.findAll().then((dbInventory) => res.json(dbInventory));
  });
  // post route to add new items to inventory (future option)
  app.post("/api/inventory", (req, res) => {
    db.Inventory.create(req.body).then((dbInventory) => res.json(dbInventory));
  });
};

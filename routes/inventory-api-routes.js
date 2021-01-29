var db = require("../models");

module.exports = (app) => {
  //   retrieves all "items" from the inventory table
  app.get("/api/inventory", (req, res) => {
    db.Inventory.findAll().then((dbInventory) => res.json(dbInventory));
  });
  // builds Cart by taking Inventory item id's and dispalys only the item and price
  app.get("/api/cart/:id", (req, res) => {
    db.Inventory.findAll({
      attributes:['item', 'price'],
      where: { id: req.params.id },
    }).then((dbInventory) => {
      res.json(dbInventory);
    });
  });
  app.post("/api/cart/:id", (req, res) => {
    db.Inventory.create({ attributes: [req.params.item, req.params.price], where: { id: req.params.id}}).then((dbInventory) => {
      res.json(dbInventory);
    });
  });
  // post route to add new items to inventory (future option)
  app.post("/api/inventory", (req, res) => {
    db.Inventory.create(req.body).then((dbInventory) => res.json(dbInventory));
  });
};

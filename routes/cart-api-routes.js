var db = require("../models");

module.exports = (app) => {
  //   retrieves all total from cart
  app.get("/api/cart", (req, res) => {
    // let query = {};
    // if (req.query.inventory_id) {
    //   query.InventoryId = req.query.inventory_id;
    // }
    db.Cart.findAll({
      // where: query,
      // include: [db.Inventory.item, db.Inventory.price],
    }).then((dbCart) => {
      res.json(dbCart);
      console.log(dbCart);
    });
  });

  // builds Cart by taking Inventory item id's and dispalys only the item and price
  app.get("/api/cart/:id", (req, res) => {
    db.Cart.findOne({
      where: { id: req.params.id },
      // include: [db.Inventory.item, db.Inventory.price],
    }).then((dbInventory) => {
      res.json(dbInventory);
    });
  });

  // route to input the total from "shopping cart" and inputs it into Cart table
  app.post("/api/cart/", (req, res) => {
    db.Cart.create(req.body).then((dbCart) => res.json(dbCart));
  });

  app.post("/api/cart/:id", (req, res) => {
    db.Cart.create({
      attributes: [req.params.item, req.params.price],
      where: { id: req.params.id },
    }).then((dbInventory) => {
      res.json(dbInventory);
    });
  });
};

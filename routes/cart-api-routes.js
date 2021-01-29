var db = require("../models");

module.exports = (app) => {
  //   retrieves all total from cart
  app.get("/api/cart", (req, res) => {
    db.Inventory.findOne({attributes: ["item", "price"]}).then((dbCart) => {
      res.json(dbCart); 
      console.log(dbCart);
    });
    
  });
   // route to input the total from "shopping cart" and inputs it into Cart table
   app.post("/api/cart", (req, res) => {
    db.Cart.create(req.body.item).then((dbCart) => res.json(dbCart));
  });
};

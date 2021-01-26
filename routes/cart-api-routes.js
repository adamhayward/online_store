var db = require("../models");

module.exports = (app) => {
  //   retrieves all total from cart
//   app.get("/api/cart", (req, res) => {
//     db.Cart.findOne().then((dbInventory) => res.json(dbInventory));
//   });
   // route to input the total from "shopping cart" and inputs it into Cart table
   app.post("/api/cart", (req, res) => {
    db.Cart.create(req.body).then((dbCart) => res.json(dbCart));
  });
};

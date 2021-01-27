$(document).ready(()=> {
  const cartBtn1 = $("#addCart1");
  const cartBtn2 = $("#addCart2");
  const cartBtn3 = $("#addCart3");
  
  let item1 = $("#item1").html();
  let price1 = $("#price1").html();
  
  let item2 = $("#item2").html();
  let price2 = $("#price2").html();
  
  let item3 = $("#item3").html();
  let price3 = $("#price3").html();
  
  const cartList = $('tbody');
  
  // onlick for button
  cartBtn1.on("click", (event) => {
    event.preventDefault();
    updateCart({
      item: item1,
      price: price1,
      // InventoryId: 1,
    });
  });
  
  function updateCart(item) {
    $.post("/api/cart", item).then(function(data){
      console.log(data);
      getCart();
    })
  }
  
  function createItemRow(item) {
    var newTr = $("<tr>");
    newTr.data("item", item1, "price", price1);
    newTr.append(`<td>${item.item}</td>`);
    newTr.append(`<td>${item.price}</td>`);
    return newTr;
  }
  
  function getCart() {
    $.get("/api/cart", function (data) {
      var rowsToAdd = [];
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        rowsToAdd.push(createItemRow(data[i]));
      }
      renderCart(rowsToAdd);
      item1.val();
      price1.val();
    });
  }
  
  function renderCart(rows) {
  cartList.children().not(":last").remove();
  if(rows.lenght) {
    cartList.prepend(rows);
  }else{
    console.log("empty")
  }
  }
  
  cartBtn2.on("click", (event) => {
    event.preventDefault();
    console.log(app2);
  });
  cartBtn3.on("click", (event) => {
    event.preventDefault();
    console.log(app3);
  });
  
  function Card(item, price) {
    this.item = item;
    this.price = price;
  }
  
  const app1 = new Card(item1, price1);
  const app2 = new Card(item2, price2);
  const app3 = new Card(item3, price3);
  
  function sumbitItem(item) {
    $.post("/api/cart", item).then();
  }
  



});


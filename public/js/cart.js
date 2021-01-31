$(document).ready(() => {
  const tableContent = $("#table-content");

  getCart();
  //   $(document).ready( getTotal)

  function getCart() {
    $.get(`/api/cart/`, (data) => {
      let itemsToAdd = [];
      for (let i = 0; i < data.length; i++) {
        itemsToAdd.push(data[i]);
        console.log(data[i]);
      }
      createCart(itemsToAdd);
      console.log(itemsToAdd);

      getTotal();
     
    });
  }

  function renderCart(item) {
    if (item.lenght) {
      tableContent.append(item);
    } else "nope";
  }

  function createCart(itemData) {
    tableContent.empty();
    let itemsToCart = [];
    for (let i = 0; i < itemData.length; i++) {
      itemsToCart.push(createCartRow(itemData[i]));
    }
    // renderCart((itemsToCart));
    tableContent.append(itemsToCart);
    // tableContent.append(newItems);
    console.log(itemsToCart);
  }

  function createCartRow(item) {
    let newTr = $("<tr>");
    let newTd = $("<td>").addClass("price");

    newTr.append(`<td>${item.item}</td>`);
    newTr.append(newTd.append(item.price));

    return newTr;
  }

function getTotal() {
    let sum = 0;
    $(".price").each(function () {
        sum += parseFloat($(this).html())
      });
      $("#total").append(`$${sum}`);
}

  const orderNowBtn = $("#order-now-btn");

  orderNowBtn.on("click", (event) => {
    event.preventDefault();
    handleSelectItem();
    location.replace("/orderForm");
  });


  function handleSelectItem() {
    let total = $('#total').val();
    $.ajax({
      method: "Post",
      url: `/api/total/${total}`,
    })
  }

});

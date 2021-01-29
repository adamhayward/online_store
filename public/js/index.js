$(document).ready(() => {
  const mainContent = $("#cards");

  $(document).on("click", "button", handleSelectItem);

  getInventory();

  function createItemCard(itemData) {
    //   refenceing HTML elements to structer a new card element
    let newImg = $("<img>").addClass("card-img-top");
    let newH5 = $("<h5>").addClass("card-title");
    let newPEl = $("<p>").addClass("card-text");
    let newLable = $("<lable>").addClass("mr-4");
    let newBttn = $("<button>").addClass("btn");
    // building new card element
    let img = newImg.attr("src", itemData.imageURL);

    let newCardData = $("<div>")
      .addClass("card-body")
      .append(
        newH5.append(itemData.item),
        newPEl.append(itemData.description),
        newLable.append(`$${itemData.price}`),
        newBttn.append("Add To Cart")
      );

    let newCard = $("<div>")
      .addClass("card")
      .css("width", "18rem")
      .append(img, newCardData.data("item", itemData));

    let newCol = $("<div>")
      .addClass("col-lg-4 col-md-6 card-col mt-3")
      .append(newCard);
    // getInventory(newCard);
    mainContent.append(newCol);
  }

  // get request to pull data from "inventory" table
  function getInventory() {
    $.get("/api/inventory", (data) => {
      let cardToAdd = [];
      for (let i = 0; i < data.length; i++) {
        cardToAdd.push(data[i]);
        // cardToAdd.push(createItemCard(data[i]));
        createItemCard(data[i]);
        console.log(data[i]);
      }
      renderItemCard(cardToAdd);
      console.log(cardToAdd);
    });
  }
  /* function telling brouser to render a new card weather or not there is any items in 
    inventory table*/
  function renderItemCard(card) {
    if (card.length) {
      mainContent.append(card);
    } else {
      alert("Sorry there are not any apps for sale at this time");
    }
  }

  function handleSelectItem() {
    let itemData = $(this).parent("div").data("item");
    let id = itemData.id;
    $.ajax({
      method: "get",
      url: `/api/cart/${id}`,
    })
    // .then(
    //   $.ajax({
    //     method: "post",
    //     url: `/api/cart/${id}`,
    //   })
    // );
  }
});

$(document).ready(() => {
  const mainContent = $("#cards");

  const button = $("#addCart1");
  button.on("click", () => createItemCard());

  getInventory();

  function createItemCard(itemData) {
    //   refenceing HTML elements to structer a new card element
    let newImg = $("<img>").addClass("card-img-top");
    let newH5 = $("<h5>").addClass("card-title");
    let newPEl = $("<p>").addClass("card-text");
    let newAEl = $("<a>");
    let newBttn = $("<button>").addClass("btn");
    // building new card element
    let img = newImg.attr("src", itemData.imageURL);

    let newCardData = $("<div>")
      .addClass("card-body")
      .append(
        newH5.append(itemData.item),
        newPEl.append(itemData.description),
        newAEl.append(itemData.price),
        newBttn.append("Add To Cart")
      );
    let newCard = $("<div>")
      .addClass("card")
      .css("width", "18rem")
      .append(img, newCardData);

    let newCol = $("<div>").addClass("col-lg-4 col-md-6 card-col")
    .append(newCard);
    // getInventory(newCard);
    mainContent.append(newCol);
  }

  // get request to pull data from "ionventory" table
  function getInventory() {
    $.get("/api/inventory", (data) => {
      let cardToAdd = [];
      for (let i = 0; i < data.length; i++) {
        cardToAdd.push(createItemCard(data[i]));
        console.log(data);
        console.log(cardToAdd);
      }
      renderItemCard(cardToAdd);
      console.log(cardToAdd);
    });
  }

  function renderItemCard(card) {
    if (card.length) {
      console.log(card);
      mainContent.append(card);
    } else {
      console.log("nope");
    }
  }
});

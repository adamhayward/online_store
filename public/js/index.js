const cartBtn = $("#addCart");

let item1 = $("#item1").html();
let price1 = $("#price1").html();

// onlick for button
cartBtn.on("click", (event) => {
  event.preventDefault();
  console.log(app);
  let item = app;
});

function Card(item, price) {
  this.item = item;
  this.price = price;
}

const cards = $("#cards").children(".card-col");
const card = cards.children(".card");
const cardBody = card.children(".card-body");

const cardItem = cardBody.children("h5");
const cardPrice = cardBody.children("a");
const cardButton = cardBody.children("button");

var cardItems = [];
function getItems() {
  for (let i = 0; i < cardItem.length; i++) {
    cardItems.push(`card-${[i + 1]}`);
  }

  // if (cardItem[i]) {
  // cardItem.addClass(`card-${[i + 1]}`);
  //   cardItems.push(cardItem[i]);
  // }
  console.log(cardItems);
  return cardItems;
}
getItems();

function assignClass() {
  for (let i = 0; i < cardItems.length; i++) {
   const cardNum = cardItems[i];

    console.log(cardNum);
    console.log(cardItem);
  
  }

}
assignClass();

// console.log(cardItem)

// const cardData = cards.children(".card-body");
for (let i = 0; i < cards; i++) {
  console.log(cardData[i]);
}

const app = new Card(item1, price1);

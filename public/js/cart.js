const totalField = $('#total');

const orderNowBtn = $("#order-now-btn");



const getTotal = () => {
  const price1 = $("#price1").html();
  const price2 = $("#price2").html();
  const price3 = $("#price3").html();

  const price1Num = Number(price1);
  const price2Num = Number(price2);
  const price3Num = Number(price3);

  var total = price1Num + price2Num + price3Num;
  console.log(total)
  totalField.text(total);
};

getTotal();

orderNowBtn.on("click", (event) => {
  event.preventDefault();
  location.replace("/orderform")
});

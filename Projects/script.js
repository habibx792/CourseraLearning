const rangeValue = document.querySelector(".rangeValue");
const valuetext = document.querySelector(".valuetext");
const noOfYears = document.querySelector("#years").value;
const amount = document.querySelector("#principal").value;
const btnCompute = document.querySelector(".btnCompute");
alert("he;");
rangeValue.addEventListener("input", () => {
  valuetext.innerText = rangeValue.value + "%";
  rangeValue.title = rangeValue.value;
});
btnCompute.addEventListener("click", () => {
  const noOfYears = document.querySelector("#years").value.trim();
  const amount = document.querySelector("#principal").value.trim();
  if (amount == "" || noOfYears == "") {
    alert("check the data ");
  } else {
    const spanData = document.querySelector(".spanData");
    let rate = Number(rangeValue.value);

    let intereseValue = (amount * rate * noOfYears) / 100;
    let totalAmount = intereseValue + Number(amount);
    alert("Total amount : " + Number(totalAmount));
    spanData.innerText = ` If you deposit ${amount}, at an interest rate of  ${rate}
    You will receive an amount of ${totalAmount}, in the year 2032`;
  }
});

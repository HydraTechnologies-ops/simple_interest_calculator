function compute() {
  let p = document.getElementById("principal").value;
  let principal = parseInt(p);
  let rate = parseInt(document.getElementById("rate").value);
  let years = parseInt(document.getElementById("years").value);
  let interest = parseFloat((principal * years * rate) / 100);
  let amount = principal + interest;
  let result = document.getElementById("result");
  let year = new Date().getFullYear() + years;

  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML =
      "If you deposit $" +
      "<mark>" +
      principal +
      "</mark>" +
      " , <br> at an interest rate of " +
      "<mark>" +
      rate +
      "</mark>" +
      "%. <br> You will receive an amount of $" +
      "<mark>" +
      interest +
      "</mark>" +
      ", <br> in the year + " +
      "<mark>" +
      year +
      "</mark>" +
      "<br>";
  }
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

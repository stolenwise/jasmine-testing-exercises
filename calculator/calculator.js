window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // Set default values for the loan
  const defaultValues = {
    amount: 10000,
    years: 5,
    rate: 5
  };

  document.getElementById("loan-amount").value = 10000
  document.getElementById("loan-years").value = 5
  document.getElementById("loan-rate").value = 5
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
const currentValues = getCurrentUIValues();
const monthlyPayment = calculateMonthlyPayment(currentValues);
updateMonthly(monthlyPayment);

// console.log(getCurrentUIValues())


}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // {monthly payment} = \frac{P \times i}{\rule{0pt}{1em} 1 - {(1 + i)}^{-n}}
  const i = values.rate / 12 / 100;
  const n = values.years * 12;
  const monthlyPayment = (values.amount * i) / (1 - Math.pow(1 + i, -n));
  return monthlyPayment.toFixed(2);
}
// Export the function
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateMonthlyPayment };
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").textContent = `$${monthly}`;

}

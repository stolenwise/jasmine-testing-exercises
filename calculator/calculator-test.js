
if (typeof require !== 'undefined') {
  var { calculateMonthlyPayment } = require('../loan-calculator.js');
}

it('should calculate the monthly rate correctly', function () {
    // Arrange: Set up inputs or test data
    // Act: Call the function being tested
    // Assert: Verify that the function output is what you expect
  const values = {
    amount: 10000, //loan amount
    years: 5,      // loan term (in years)
    rate: 5        //Yearly interest rate
  };
  expect(calculateMonthlyPayment(values)).toEqual('188.71'); // Call the function with the inputs
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10573, //loan amount
    years: 9,      // loan term (in years)
    rate: 6.5        //Yearly interest rate
  };
  expect(calculateMonthlyPayment(values)).toEqual('129.57'); // Call the function with the inputs
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1000, //loan amount
    years: 40,      // loan term (in years)
    rate: 99       //Yearly interest rate
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50'); // Call the function with the inputs
});

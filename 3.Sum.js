function addNumbers(a, b) {
    // Variable declared using 'var' keyword
    console.log("The sum is:", sum); // This will log 'undefined' due to hoisting
    var sum = a + b;
    console.log("The sum is:", sum); // This will log the actual sum value
    return sum;
  }
  
  addNumbers(5, 7);
  
function demonstrateTemporalDeadZone() {
    // Using 'let' inside a block scope
    try {
        console.log("Before let declaration, value of numLet:", numLet); // Throws ReferenceError
    } catch (error) {
        console.log(error);
    }
    let numLet = 20;
    console.log("After let declaration, value of numLet:", numLet); // Logs '20'
  }
  
  demonstrateTemporalDeadZone();
  
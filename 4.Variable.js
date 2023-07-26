function demonstrateVariableHoisting() {
    // Using 'var'
    console.log("Before var declaration, value of numVar:", numVar); // Logs 'undefined'
    var numVar = 10;
    console.log("After var declaration, value of numVar:", numVar); // Logs '10'
  
    // Using 'let'
    try{
        console.log("Before let declaration, value of numLet:", numLet); // Throws ReferenceError
    }
    catch(error){
        console.log(error);
    }
    let numLet = 20;
    console.log("After let declaration, value of numLet:", numLet); // Logs '20'
  
    // Using 'const'
    try {
        console.log("Before const declaration, value of numConst:", numConst); // Throws ReferenceError
    } catch (error) {
        console.log(error);
    }
    const numConst = 30;
    console.log("After const declaration, value of numConst:", numConst); // Logs '30'
  }
  
  demonstrateVariableHoisting();
  
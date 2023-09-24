const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 1e9*2; i++) {
      sum += i;
    }
    return sum;
  };
  
  process.on("message", msg => {
    console.profile()
    const sum = longComputation();
    process.send(sum);
    console.profileEnd()
  });
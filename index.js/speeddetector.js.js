function speedDetector() {
    //Prompt the user for speed of the car
    let speed = prompt("Enter the speed of the car:");
  
    //Convert the input to a number
    speed = Number(speed);
  
    // Check if the input is a valid number
    if (isNaN(speed) || speed < 0) {
      console.log("Please enter a valid speed.");
      return;
    }
  
    // Define the speed limit and points
    const speedLimit = 70;
    const pointsLimit = 12;
  
    // Check if the speed is within the limit
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      // Calculate limit points
      const limitPoints = Math.floor((speed - speedLimit) / 5);
  
      // Check if the driver gets more than 12 points
      if (limitPoints > pointsLimit) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${limitPoints}`);
      }
    }
  }
  
  // Call the function to run it
  speedDetector();
  
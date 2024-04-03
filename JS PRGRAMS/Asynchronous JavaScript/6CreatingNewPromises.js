function trackFitness(exercise, duration) {

    return new Promise((resolve, reject) => {
      console.log(
        `Tracking fitness for ${exercise}, duration: ${duration} minutes.`
      );

      setTimeout(() => {
        if (duration > 0) {
          resolve(duration);
        } else {
          reject("Invalid duration. Please provide a positive number.");
        }
      }, 5000);
    });
  
}

trackFitness("Running", 30)
  .then((duration) => {
    console.log(`Total duration: ${duration} minutes.`);
  })
  .catch((error) => {
    console.log(`Failed to track fitness: ${error}`);
});

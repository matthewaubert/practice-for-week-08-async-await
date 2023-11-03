function stretch(timeLeft) {
  const timeToAct = 1000;

  return new Promise((resolve, reject) => {
    if (timeLeft < timeToAct) {

      // if we dont have enough time to complete the action
      // reject the promise with the reason 
      reject('you dont have enough time to stretch')

    } else {

      // decrement timeLeft by time it takes to stretch
      timeLeft -= timeToAct;

      setTimeout(() => {
        console.log('done stretching');

        // promise resolves with updated amount of time left
        resolve(timeLeft)
      }, timeToAct)
    }
  })
}


function runOnTreadmill(timeLeft) {
  timeToAct = 500;

  return new Promise((resolve, reject) => {
    if (timeLeft < timeToAct) {
      reject('you dont have enough time to run on treadmill')
    } else {
      timeLeft -= timeToAct;

      setTimeout(() => {
        console.log('done running on treadmill');
        resolve(timeLeft)
      }, timeToAct)
    }

  })
}


function liftWeights(timeLeft) {
  timeToAct = 2000;

  return new Promise((resolve, reject) => {
    if (timeLeft < timeToAct) {
      reject('you dont have enough time to lift weights')
    } else {
      timeLeft -= timeToAct

      setTimeout(() => {
        console.log('done lifting weights');
        resolve(timeLeft)
      }, timeToAct)
    }
  })
}


// refactor this function to handle Promises using async/await instead of
  // .then and .catch
async function workout(totalTime) {
  try {
    const timeLeftAfterStretching = await stretch(totalTime);
    const timeLeftAfterRunning = await runOnTreadmill(timeLeftAfterStretching);
    const timeLeftAfterLiftingWeights = await liftWeights(timeLeftAfterRunning);
    console.log(`done working out with ${timeLeftAfterLiftingWeights / 1000} seconds left`);
  } catch (err) {
    console.error('Error: ', err);
  }
}


/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
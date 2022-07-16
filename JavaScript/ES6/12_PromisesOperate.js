let add = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Not enough numbers to add");
    } else {
      let sum = arr[0] + arr[1];
      console.log("Sum is " + sum);
      resolve(arr);
    }
  });
};

let subtract = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Not enough numbers to subtract");
    } else {
      let result = arr[0] - arr[1];
      console.log("Difference is " + result);
      resolve(arr);
    }
  });
};

let multiply = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Not enough numbers to multiply");
    } else {
      let result = arr[0] * arr[1];
      console.log("Product is " + result);
      resolve(arr);
    }
  });
};

add([45])
  .then(subtract)
  .then(multiply)
  .catch((error) => console.log("Error occurred:-", error));
